module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'arial-black': ['Arial Black', 'sans-serif'],
      arial: ['Arial', 'sans-serif'],
      'times-new-roman': ['Times New Roman', 'serif'],
      'comic-sans': ['Comic Sans MS', 'cursive'],
      roboto: ['Roboto', 'sans-serif'],
      vcr: ['VCR OSD Mono', 'monospace'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
      variants: {
        extend: {
          animation: ['hover', 'focus', 'group-hover'],
        },
      },
    },
    screens: {
      xs: '480px', // Extra Small (pour les petits appareils mobiles)
      sm: '640px', // Small (pour la plupart des appareils mobiles)
      tablet: '768px', // Medium (pour les tablettes et les petits écrans d'ordinateurs portables)
      md: '1024px', // Medium (pour les tablettes et les petits écrans d'ordinateurs portables)
      lg: '960px', // Large (pour les ordinateurs portables et les petits écrans d'ordinateurs de bureau)
      xl: '1200px', // Extra Large (pour les grands écrans d'ordinateurs de bureau)
      '2xl': '1440px', // 2X Large (pour les très grands écrans d'ordinateurs de bureau)
      '3xl': '1920px', // 3X Large (pour les écrans 4K)
      '4xl': '2560px', // 4X Large (pour les écrans 5K et plus)
    },

    extend: {
      colors: {
        lbgreen: '#035F1D',
        lbpink: '#E45C96',
        lbblue: '#0F4C81',
        lbgreenlight: '#97D700',
        lbpinklight: '#F8CDCD',
        lbpurple: '#440099',
        lbgray: '#5F6367',
        lbgreenvintageria: '#72d48b',
        lbyellowvintageria: '#fdeb17',
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
