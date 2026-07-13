/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101114',
        surface: '#17181c',
        surface2: '#1d1f24',
        paper: '#edede7',
        muted: '#8b8d93',
        line: '#2a2c31',
        accent: '#2f5cff',
        brass: '#c9a227'
      },
      fontFamily: {
        display: ['"Clash Display"', 'serif'],
        body: ['"Satoshi"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      }
    }
  },
  plugins: []
}
