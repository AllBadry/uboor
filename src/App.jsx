import React, { useEffect } from 'react';
// 🌟 التصحيح الأهم للـ SEO: استخدام BrowserRouter
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { productRoutes } from './routes';

// استدعاء المكونات الأساسية
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// استدعاء الصفحات
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services'; 
import Contact from './pages/Contact';

// مكون ذكي لرفع الصفحة للأعلى عند التنقل بين الروابط
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* المسارات الديناميكية (المنتجات) */}
            {productRoutes && productRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;