import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages : https://yehielscourses.github.io/bacV5/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/bacV5/" : "/",
  plugins: [react(), tailwindcss()],
}));
