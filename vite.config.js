
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'hvac-checklist' with your repo name
export default defineConfig({
  base: '/hvac-checklist/',
  plugins: [react()],
})
