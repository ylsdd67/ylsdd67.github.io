/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e'
                }
            },
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'PingFang SC',
                    'Microsoft YaHei',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans SC',
                    'Noto Sans CJK SC',
                    'Source Han Sans SC',
                    'WenQuanYi Micro Hei',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji'
                ],
                mono: [
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    'Liberation Mono',
                    'Courier New',
                    'PingFang SC',
                    'Microsoft YaHei UI',
                    'Microsoft YaHei',
                    'Noto Sans SC',
                    'Noto Sans CJK SC',
                    'Source Han Sans SC',
                    'WenQuanYi Micro Hei',
                    'monospace'
                ]
            }
        }
    },
    plugins: [typography]
};
