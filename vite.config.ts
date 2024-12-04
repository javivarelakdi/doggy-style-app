// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
      "@": "/src", // This maps the @ alias to the src directory
    },
  },
});
