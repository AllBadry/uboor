// /src/App.jsx


import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { productRoutes } from './routes';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';

// استخدام الاستيراد الكسول (Lazy) لحل مشكلة السرعة
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/privacy'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      
      <div className="app-container rtl" dir="rtl">
        <Navbar />
        <main>
          {/* الغلاف الإجباري لمنع انهيار الموقع أثناء تحميل الصفحات */}
          <Suspense fallback={<div className="loading-screen">جاري التحميل...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              
              {productRoutes && productRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;