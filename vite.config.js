import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// استبدل 'repo-name' باسم المستودع الخاص بك على GitHub
export default defineConfig({
  plugins: [react()],
  base: '/', 
})