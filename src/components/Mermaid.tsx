'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import LoadingAnimation from '@/app/loading'
import { useTheme } from '@/theme/ThemeContext'

export default function Mermaid({ chart, filename }: { chart: string; filename: string }) {
  const container = useRef<HTMLDivElement>(null)
  const [isRendered, setIsRendered] = useState(false)
  const { theme } = useTheme()

  const initMermaid = useCallback(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: theme === 'dark' ? 'dark' : 'default',
      themeVariables: {
        fontFamily: 'inherit',
      },
      look: 'handDrawn',
    })
  }, [theme])

  const renderDiagram = useCallback(async () => {
    if (!container.current) return

    setIsRendered(false)

    try {
      container.current.innerHTML = chart

      const { svg } = await mermaid.render(`mermaid-${Date.now()}`, chart)

      container.current.innerHTML = svg
    } finally {
      setIsRendered(true)
    }
  }, [chart])

  // 初始渲染
  useEffect(() => {
    initMermaid()
    renderDiagram()
  }, [initMermaid, renderDiagram, theme])

  return (
    <div className="relative overflow-hidden rounded-md shadow-sm">
      <div className="flex h-10 items-center bg-code-filename-bg px-4 text-text">
        {filename || 'mermaid'}
      </div>
      {!isRendered && (
        <div className="h-40">
          <LoadingAnimation width={60} height={60} />
        </div>
      )}
      <div
        ref={container}
        className={`mermaid flex justify-center bg-code-bg py-4 ${
          isRendered ? 'visible' : 'invisible'
        }`}
        suppressHydrationWarning
      ></div>
    </div>
  )
}
