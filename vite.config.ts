import path, { resolve } from "path";
import fs from "fs-extra";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "~": `${path.resolve(__dirname, "src")}/`,
    },
  },
  build: {
    outDir: `${path.resolve(__dirname, "dist")}/`,
  },
  plugins: [react()],
});
