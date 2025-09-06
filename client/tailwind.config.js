// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'fuchsia-950': '#4a044e', // dark purple
//         'pink-900': '#831843',    // dark pink
//         'violet-deep': '#3B1C32',
//         'violet-dark': '#6A1E55',
//       },
//       fontFamily: {
//         tech: ["'Share Tech Mono'", 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fuchsia-950': '#4a044e', // dark purple
        'pink-900': '#831843',    // dark pink
        'violet-deep': '#3B1C32',
        'violet-dark': '#6A1E55',
      },
      fontFamily: {
        tech: ["'Share Tech Mono'", 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'purple-neon': '0 0 15px rgba(192, 132, 252, 0.7), 0 0 30px rgba(192, 132, 252, 0.4)',
      },
    },
  },
  plugins: [],
}

// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       boxShadow: {
//         'purple-neon': '0 0 15px rgba(192, 132, 252, 0.7), 0 0 30px rgba(192, 132, 252, 0.4)',
//       }
//     },
//   },
//   plugins: [],
// }