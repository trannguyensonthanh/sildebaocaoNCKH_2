// Bước 1: Import plugin bằng cú pháp ES Modules
import debugScreens from 'tailwindcss-debug-screens';

/** @type {import('tailwindcss').Config} */
export default {
  // Bật chế độ important để ghi đè CSS của Reveal.js
  important: true,

  content: ['./index.html', './src/**/*.{html,js,md}'],
  theme: {
    extend: {
      // Bảng màu và font chữ của bạn giữ nguyên
      colors: {
        'tech-bg': '#0a192f',
        'tech-card': '#112240',
        'tech-text': '#ccd6f6',
        'tech-subtle': '#8892b0',
        'tech-heading': '#e6f1ff',
        'tech-highlight': '#64ffda',
        'tech-highlight-darker': '#4bc4ab',
        'tech-border': 'rgba(136, 146, 176, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      // Animation của bạn giữ nguyên
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseHighlight: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(100, 255, 218, 0.4)' },
          '70%': { boxShadow: '0 0 0 15px rgba(100, 255, 218, 0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-highlight':
          'pulseHighlight 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },

  // Bước 2: Sử dụng biến đã import
  plugins: [
    debugScreens, // Không dùng require() nữa
  ],
};
