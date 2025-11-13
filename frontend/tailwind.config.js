// frontend/tailwind.config.js

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.js'
  ],
  theme: {
    extend: {
      // --- Colores de Figma ---
      colors: {
        'primary-blue': '#1F49B6',
        white: '#FFFFFF',
        'dark-text': '#1A1A1A',
        'bg-light': '#E0E6FF',
        'hover-text': '#01D196',
        'blue-text': '#102A97'
      },
      // --- Espaciado de Figma ---
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '32px',
        // Añadimos tokens más grandes para el layout (ej. padding del Navbar)
        xl: '48px',
        xxl: '128px'
      },
      // --- Tipografías de Figma ---
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        // Establecemos Poppins como la fuente por defecto
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
