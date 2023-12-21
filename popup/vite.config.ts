import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/build/popup",
  build: {
    outDir: `${path.resolve(__dirname, "../build/popup")}/`,
    emptyOutDir: true,
  },
  plugins: [react()],
});
