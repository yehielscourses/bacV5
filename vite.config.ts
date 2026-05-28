import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Chemins relatifs : correct pour GitHub Pages projet (/bacV5/)
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
