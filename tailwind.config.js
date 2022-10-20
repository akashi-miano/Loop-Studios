/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
		 fontFamily: {
			 'sans': ['ui-sans-serif', 'system-ui'],
			 'serif': ['ui-serif', 'Georgia'],
			 'josefin': ['Josefin Sans', 'sans-serif'],
			 'alata': ['Alata', 'sans-serif'],
			 'Cedarville Cursive': ['cursive'],
		 }
	},
  },
	plugins: [],
}
