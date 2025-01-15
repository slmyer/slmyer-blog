'use client'

import { ClipboardCheck, Copy } from 'lucide-react'
import { useCallback } from 'react'
import { useState } from 'react'

const CodeBlockWrap = ({
  className,
  children,
  filename,
  raw,
}: {
  className: React.CSSProperties
  children: React.ReactNode
  filename: string
  raw: string
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(raw)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }, [raw])

  return (
    <div className="overflow-hidden rounded-md shadow-sm">
      {filename && (
        <div className="flex h-10 items-center bg-code-filename-bg px-4 text-text">{filename}</div>
      )}

      <pre className={`relative ${className}`}>
        {children}
        <div
          onClick={copy}
          className="z-6 absolute right-4 top-4 cursor-pointer text-sub-text transition-all duration-300 ease-in-out hover:scale-110"
        >
          {!isCopied ? <Copy size={16} /> : <ClipboardCheck size={16} />}
        </div>
      </pre>
    </div>
  )
}

export default CodeBlockWrap
