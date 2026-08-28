import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 🌟 هذا السطر يضمن تحميل الـ JS بشكل صحيح في كل الصفحات
  build: {
    rolldownOptions: {
      output: {
        // 🌟 دمج أيقونات lucide-react في حزمة واحدة بدلاً من حزم كثيرة صغيرة
        // تمنع هذه الطريقة سلسلة الطلبات الحرجة (Critical Request Chain)
        manualChunks(id) {
          if (id.includes('node_modules/lucide-react')) return 'icons';
        }
      }
    }
  },
})