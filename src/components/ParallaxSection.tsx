'use client'

import { useEffect, useRef, useCallback } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const animationFrameId = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current)
    }

    animationFrameId.current = requestAnimationFrame(() => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrolled = window.scrollY
      const offsetTop = rect.top + scrolled
      const yPos = -(scrolled - offsetTop) * speed

      section.style.transform = `translate3d(0, ${yPos * 2}px, 0)`
    })
  }, [speed])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div ref={sectionRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
