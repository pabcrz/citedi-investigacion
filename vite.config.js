import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html", // Página principal
        lgac: "src/pages/lgac.html", // Página LGAC
      },
    },
  },
});
