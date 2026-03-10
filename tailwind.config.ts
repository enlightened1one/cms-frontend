module.exports = {
  content: [
    "./app/*/.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Required for App Router
    "./pages/*/.{js,ts,jsx,tsx,mdx}",
    "./components/*/.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other directories you use
  ],
  // ... other configuration
}