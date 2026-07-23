import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // هذا الهوك يجلب مسار الصفحة الحالي
  const { pathname } = useLocation();

  useEffect(() => {
    // في كل مرة يتغير فيها المسار، اجعل السكرول يعود لأعلى نقطة (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  // المكون لا يعرض أي شيء في واجهة المستخدم
  return null;
}