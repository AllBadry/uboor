import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', 
  server: {
    host: '0.0.0.0', // هذا يسمح لـ Vite بالاستماع على جميع واجهات الشبكة
    port: 5173       // تأكد أن المنفذ هو 5173
  }
})