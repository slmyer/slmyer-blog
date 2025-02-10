'use client'

import React from 'react'

const LoadingAnimation: React.FC<{ height?: number; width?: number }> = ({
  height = 200,
  width = 200,
}) => {
  // 根据宽高比例动态计算路径的坐标
  const scaleX = width / 200
  const scaleY = height / 200

  const path1 = `M${40 * scaleX} ${100 * scaleY} C${60 * scaleX} ${60 * scaleY}, ${80 * scaleX} ${140 * scaleY}, ${100 * scaleX} ${100 * scaleY} S${140 * scaleX} ${60 * scaleY}, ${160 * scaleX} ${100 * scaleY}`
  const path2 = `M${40 * scaleX} ${130 * scaleY} C${60 * scaleX} ${90 * scaleY}, ${80 * scaleX} ${170 * scaleY}, ${100 * scaleX} ${130 * scaleY} S${140 * scaleX} ${90 * scaleY}, ${160 * scaleX} ${130 * scaleY}`

  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6A11CB" />
            <stop offset="100%" stopColor="#2575FC" />
          </linearGradient>
        </defs>
        <path
          d={path1}
          stroke="url(#grad1)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          className="animate-draw"
          strokeDasharray="300"
          strokeDashoffset="300"
        />
        <path
          d={path2}
          stroke="url(#grad1)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          className="animation-delay-500 animate-draw"
          strokeDasharray="300"
          strokeDashoffset="300"
        />
      </svg>
    </div>
  )
}

export default LoadingAnimation
