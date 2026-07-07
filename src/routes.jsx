// src/routes.js
// تأكد أن المسار صحيح حسب مجلداتك (إذا كان في مجلد pages)
import WACollector from './products/WACollectorPage.jsx';
import AutoCollector from './products/AutoCapturePage.jsx';

export const productRoutes = [
  // قمنا بتمرير المكون كـ element جاهز <WACollector />
  { path: "/products/wacollector", element: <WACollector /> } ,
  { path: "/products/auto-capture", element: <AutoCollector /> }
];