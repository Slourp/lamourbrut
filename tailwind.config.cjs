module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'arial-black': ['Arial Black', 'sans-serif'],
      'times-new-roman': ['Times New Roman', 'serif'],
      'comic-sans': ['Comic Sans MS', 'cursive'],
      roboto: ['Roboto', 'sans-serif'],
      vcr: ['VCR OSD Mono', 'monospace'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        // primary: '#0a0a0a',
        // accent: '#42a6e3',
      },
      backgroundImage: {
        // site: "url('./assets/site-bg.jpg')",
        // about: "url('./assets/about.png')",
        // services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
}
