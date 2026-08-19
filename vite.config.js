import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 🌟 هذا السطر يضمن تحميل الـ JS بشكل صحيح في كل الصفحات
})