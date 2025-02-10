'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import LoadingAnimation from '@/app/loading'

export default function Mermaid({ chart, filename }: { chart: string; filename: string }) {
  const container = useRef(null)

  const [render, setRender] = useState(false)

  useEffect(() => {
    if (!container.current) return

    mermaid.initialize({
      startOnLoad: false,
    })

    mermaid
      .run({
        nodes: [container.current],
      })
      .then(() => {
        setRender(true)
      })
  }, [chart])

  return (
    <div className="relative mt-10 overflow-hidden rounded-md shadow-sm">
      <div className="flex h-10 items-center bg-code-filename-bg px-4 text-text">
        {filename || 'mermaid'}
      </div>
      {!render && (
        <div className="h-40">
          <LoadingAnimation width={60} height={60}></LoadingAnimation>
        </div>
      )}
      <div
        ref={container}
        className={`mermaid flex justify-center bg-code-bg py-4 ${render ? 'visible' : 'invisible'}`}
        suppressHydrationWarning
      >
        {chart}
      </div>
    </div>
  )
}
