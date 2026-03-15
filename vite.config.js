import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig(({ command, mode }) => {
  const isVercel = process.env.VERCEL === "1";

  if (isVercel) {
    // Vercel deployment (App)
    return {
      plugins: [react(), tailwindcss()],
      build: {
        outDir: "dist",
      }
    };
  }

  // NPM Package (Library)
  return {
    plugins: [react(), tailwindcss()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/components/index.js"),
        name: "MSUIKit",
        fileName: "ms-ui-kit",
        formats: ["es"]
      },
      rollupOptions: {
        external: ["react", "react-dom", "react-router-dom", "framer-motion", "lucide-react"]
      }
    }
  };
});