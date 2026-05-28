/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ethos: {
          black: "#050505",
          graphite: "#111216",
          fog: "#aeb5c1",
          bone: "#f1eee7",
          beige: "#c9bda9",
          silver: "#dce2ea",
          blue: "#89aee8",
          amber: "#c9a66b"
        }
      },
      boxShadow: {
        glass: "0 30px 120px rgba(0,0,0,0.42)",
        glow: "0 0 70px rgba(137,174,232,0.22)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
