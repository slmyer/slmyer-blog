export default function EmptyState() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="relative mb-4 h-24 w-24">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="100" height="100" rx="10" fill="#E5E7EB" />
          <path
            d="M45 50H95M45 70H95M45 90H75"
            stroke="#9CA3AF"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="105" cy="105" r="25" fill={`var(--color-primary)`} />
          <path d="M105 95V115M95 105H115" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 animate-pulse rounded-full bg-opacity-50"></div>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-text">暂无内容</h3>
      <p className="max-w-md text-sub-text">懒癌犯了，新内容还没鼓捣好。</p>
    </div>
  )
}
