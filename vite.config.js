import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ianalves-alt.github.io/Website2/",
  plugins: [react()],
})
