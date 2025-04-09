import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        card: 'var(--card-bg-color)',
        text: 'var(--text-color)',
        'sub-text': 'var(--sub-text-color)',
        'code-bg': 'var(--code-bg-color)',
        'code-filename-bg': 'var(--filename-bg)',
      },
      fontFamily: {
        space: ['var(--font-space)'],
        fira: ['var(--font-fira)'],
      },
      animation: {
        draw: 'draw 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: '300', opacity: '0' },
          '50%': { strokeDashoffset: '150', opacity: '0.5' },
          '100%': { strokeDashoffset: '300', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: ({ theme }: { theme: (key: string) => string }) => ({
        dark: {
          css: {
            '--tw-prose-body': 'var(--sub-text-color)', // 正文颜色
            '--tw-prose-headings': theme('colors.text'), // 标题颜色
            '--tw-prose-links': theme('colors.primary'), // 链接颜色
            '--tw-prose-links-hover': '#9333ea', // 链接悬停颜色
            '--tw-prose-bold': theme('colors.text'), // 粗体颜色
            '--tw-prose-counters': '#a1a1aa', // 列表计数器颜色
            '--tw-prose-bullets': '#71717a', // 列表项目符号颜色
            '--tw-prose-hr': '#333333', // 分隔线颜色
            '--tw-prose-quotes': 'var(--sub-text-color)', // 引用文本颜色
            '--tw-prose-quote-borders': theme('colors.primary'), // 引用边框颜色
            '--tw-prose-captions': '#9ca3af', // 图片说明文字颜色
            '--tw-prose-code': '#f4f4f4', // 行内代码颜色
            '--tw-prose-pre-code': '#f4f4f4', // 代码块文字颜色
            '--tw-prose-pre-bg': '#1f1f1f', // 代码块背景颜色
            '--tw-prose-th-borders': '#333333', // 表头边框颜色
            '--tw-prose-td-borders': '#444444', // 单元格边框颜色
          },
        },
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--sub-text-color)', // 正文颜色
            '--tw-prose-headings': theme('colors.text'), // 标题颜色
            '--tw-prose-links': theme('colors.primary'), // 链接颜色
            '--tw-prose-links-hover': '#9333ea', // 链接悬停颜色
            '--tw-prose-bold': theme('colors.text'), // 粗体颜色
            '--tw-prose-counters': '#a1a1aa', // 列表计数器颜色
            '--tw-prose-bullets': '#71717a', // 列表项目符号颜色
            '--tw-prose-hr': '#333333', // 分隔线颜色
            '--tw-prose-quotes': 'var(--sub-text-color)', // 引用文本颜色
            '--tw-prose-quote-borders': theme('colors.primary'), // 引用边框颜色
            '--tw-prose-captions': '#9ca3af', // 图片说明文字颜色
            '--tw-prose-code': '#f4f4f4', // 行内代码颜色
            '--tw-prose-pre-code': '#f4f4f4', // 代码块文字颜色
            '--tw-prose-pre-bg': '#1f1f1f', // 代码块背景颜色
            '--tw-prose-th-borders': '#333333', // 表头边框颜色
            '--tw-prose-td-borders': '#444444', // 单元格边框颜色
          },
        },
      }),
    },
  },
  plugins: [typography],
} as Config
