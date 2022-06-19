module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xl3: { min: '1540px' },
      xl2: { max: '1539px' },
      xl1: { max: '1279px' },
      lg1: { max: '1023px' },
      md1: { max: '767px' },
      sm1: { max: '639px' },
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [
    
  ],
}
