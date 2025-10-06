module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta natural y elegante para salón de eventos
        'primary': '#4A7C59',        // Verde natural
        'secondary': '#6B8E5A',      // Verde oliva
        'accent': '#8FBC8F',         // Verde claro
        'light-bg': '#F5F5DC',       // Beige crema
        'soft-cream': '#FAF0E6',     // Crema suave
        'warm-cream': '#FDF5E6',     // Crema cálido
        'text-dark': '#2F4F2F',      // Verde oscuro para texto
        'text-light': '#FFFFFF',     // Blanco puro
        'natural-brown': '#8B7355',  // Marrón natural
        // Colores de hover y variaciones
        'primary-hover': '#3A5F3A',
        'secondary-hover': '#5A7A4A',
        'accent-hover': '#7BA87B',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};