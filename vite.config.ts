import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const alias = {
  assets    : resolve(__dirname, './src/assets'),
  components: resolve(__dirname, './src/components'),
  global    : resolve(__dirname, './src/global.ts'),
  routes    : resolve(__dirname, './src/routes'),
  store     : resolve(__dirname, './src/store'),
  types     : resolve(__dirname, './src/types'),
  utils     : resolve(__dirname, './src/utils')
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit : true,
    minify       : 'terser',
    rollupOptions: {
      output: {
        minifyInternalExports: true
      }
    },
    sourcemap    : false,
    target       : 'esnext',
    terserOptions: {
      compress: {
        collapse_vars: true,
        dead_code    : true,
        drop_console : true,
        drop_debugger: true,
        ecma         : 5,
        unused       : true
      },
      ecma     : 5,
      sourceMap: true
    }
  },
  cacheDir: 'node_modules/.cacheDir',
  plugins : [ react() ],
  preview : {
    host: true,
    port: 3000
  },
  resolve: {
    alias
  },
  server: {
    host: true,
    port: 3000
  }
})
