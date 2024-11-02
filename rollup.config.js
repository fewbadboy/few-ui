import { defineConfig } from "rollup"
import { nodeResolve as nodeResolvePlugin } from "@rollup/plugin-node-resolve"
import commonjsPlugin from "@rollup/plugin-commonjs"
import { babel as babelPlugin } from "@rollup/plugin-babel"
import typescriptPlugin from "@rollup/plugin-typescript"
import { dts } from "rollup-plugin-dts"
import autoprefixer from "autoprefixer"
import postcssPlugin from "rollup-plugin-postcss"
// import terserPlugin from "@rollup/plugin-terser"
import pkg from './package.json' with { type: 'json' }

export default defineConfig([
  {
    input: "index.tsx",
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: true
    },
    external: [
      ...Object.keys(pkg.dependencies)
    ],
    watch: {
      buildDelay: 1000,
      include: ["./src/**"],
      exclude: ["./node_modules/**"]
    },
    plugins: [
      typescriptPlugin({
        tsconfig: './tsconfig.json'
      }),
      nodeResolvePlugin({
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      }),
      commonjsPlugin(),
      babelPlugin({
        babelHelpers: "bundled",
        exclude: [
          "node_modules/**"
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      }),
      postcssPlugin({
        extensions: [".css", ".scss"],
        plugins: [
          autoprefixer()
        ],
        sourceMap: true,
        extract: true,
        minimize: false
      }),
      // terserPlugin()
    ]
  },
  {
    input: "dist/types/index.d.ts",
    output: {
      file: "dist/index.d.ts",
      format: "esm",
    },
    plugins: [
      dts()
    ]
  }
])