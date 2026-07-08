import React, { lazy } from 'react';

// 🌟 تحويل الاستيراد العادي إلى استيراد كسول (Lazy Import)
// الآن لن يتم تحميل هذه الصفحات إلا عندما يضغط المستخدم على رابطها
const WACollector = lazy(() => import('./products/WACollectorPage.jsx'));
const AutoCollector = lazy(() => import('./products/AutoCapturePage.jsx'));

export const productRoutes = [
  { path: "/products/wacollector", element: <WACollector /> },
  { path: "/products/auto-capture", element: <AutoCollector /> }
];