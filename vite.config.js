import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.js"),
      name: "MSUIKit",
      fileName: "ms-ui-kit",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
})