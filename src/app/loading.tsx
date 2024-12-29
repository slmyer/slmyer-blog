'use client'

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
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
          d="M40 100 C60 60 80 140 100 100 S140 60 160 100"
          stroke="url(#grad1)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          className="animate-draw"
          strokeDasharray="300"
          strokeDashoffset="300"
        />
        <path
          d="M40 130 C60 90 80 170 100 130 S140 90 160 130"
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
