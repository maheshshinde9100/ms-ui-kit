import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { visualizer } from "rollup-plugin-visualizer"

// Shared externals — these are never bundled into the library output
const EXTERNALS = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "react-router-dom",
  "framer-motion",
  "lucide-react",
  "prop-types",
]

// Match any sub-path imports from external packages
const externalPattern = new RegExp(
  `^(${EXTERNALS.map((e) => e.replace(/[/\\\\]/g, "[\\\\/]")).join("|")})([\\/].*)?$`
)

export default defineConfig(({ mode }) => {
  const isVercel = process.env.VERCEL === "1"
  const isAnalyze = mode === "analyze"
  const isLib = mode === "lib" || isAnalyze

  // ─── Vercel deployment (full app) ───────────────────────────────────
  if (isVercel) {
    return {
      plugins: [react(), tailwindcss()],
      build: {
        outDir: "dist",
      },
    }
  }

  // ─── Local dev / default build (full app) ──────────────────────────
  if (!isLib) {
    return {
      plugins: [react(), tailwindcss()],
      build: {
        outDir: "dist",
      },
    }
  }

  // ─── Library build (npm package) ───────────────────────────────────
  const plugins = [react(), tailwindcss()]

  if (isAnalyze) {
    plugins.push(
      visualizer({
        filename: "dist/stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
        template: "treemap",
      })
    )
  }

  return {
    plugins,
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/components/index.js"),
        formats: ["es"],
      },
      rollupOptions: {
        // Mark all peer/external deps as external
        external: (id) => externalPattern.test(id),
        output: {
          // Preserve the component module structure so consumers can
          // cherry-pick individual components and bundlers can tree-shake
          // unused ones automatically.
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",

          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
          },
        },
      },

      // Use esbuild for fast, compact minification
      minify: "esbuild",
      target: "es2020",

      // Eliminate dead code more aggressively
      commonjsOptions: {
        transformMixedEsModules: true,
      },

      // Generate source maps for debugging (consumers can opt-in)
      sourcemap: true,

      // Report compressed sizes in terminal output
      reportCompressedSize: true,
    },
  }
})