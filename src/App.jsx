import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { productRoutes } from './routes';
// استدعاء المكونات الأساسية
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// استدعاء الصفحات الحقيقية
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; // استدعاء صفحة من نحن التي برمجناها للتو!
import Services from './pages/Services'; 
import Contact from './pages/Contact';




// كائن المحتوى (للاستخدام المستقبلي في تعدد اللغات)
const content = {
  en: {
    title: "Uboor",
    subtitle: "Systems . Software . Websites",
    switchLang: "عربي",
    heroHeading: "Comprehensive Software Solutions",
    heroText: "Uboor is a multi-faceted technology company specializing in building robust websites, diverse digital systems, and innovative software solutions for businesses worldwide.",
    sections: {
      webDev: {
        title: "Web & System Development",
        items: ["Personal & Corporate Websites", "E-commerce Platforms", "Learning Management Systems (LMS)", "CMS & Dashboards", "Media & Chat Platforms", "User Management Systems"]
      },
      extensions: {
        title: "Browser Extensions",
        items: ["Web Scrapers", "Productivity Tools", "Custom Automation Extensions"]
      },
      openSource: {
        title: "Open Source Software",
        items: ["Data Dalet: Decentralized, Encrypted, Infinite Storage Systems"]
      },
      apis: {
        title: "API Services",
        items: ["Free & Premium API Solutions", "Albadry-Email-Checker API", "Custom Data Verification APIs"]
      }
    },
    footer: "© 2026 Uboor. All rights reserved."
  },
  ar: {
    title: "عبـور",
    subtitle: "أنظمة . برامج . تطبيقات . مواقع",
    switchLang: "English",
    heroHeading: "حلول برمجية متكاملة",
    heroText: "عبور هي شركة تكنولوجيا متعددة الجوانب تتخصص في برمجة مواقع الإنترنت بمختلف أنواعها، وأنظمة الإدارة، والحلول البرمجية المبتكرة للشركات.",
    sections: {
      webDev: {
        title: "تطوير المواقع والأنظمة",
        items: ["مواقع تعريفية شخصية وشركات", "متاجر إلكترونية", "منصات تعليمية", "تطبيقات إدارة المحتوى (Dashboards)", "منصات عرض الوسائط والشات", "أنظمة إدارة المستخدمين"]
      },
      extensions: {
        title: "إضافات المتصفح (Extensions)",
        items: ["إضافات سكرابر (Scrapers) لاستخراج البيانات", "أدوات الأتمتة", "إضافات مخصصة متعددة الأغراض"]
      },
      openSource: {
        title: "برمجيات مفتوحة المصدر",
        items: ["داتا دالت (Data Dalet): نظام التخزين اللانهائي اللامركزي والمشفر"]
      },
      apis: {
        title: "خدمات واجهات برمجة التطبيقات (API)",
        items: ["واجهات مجانية ومدفوعة", "API التحقق من الإيميلات (Albadry-Email-Checker)", "واجهات للتحقق من البيانات المختلفة"]
      }
    },
    footer: "© 2026 شركة عبور. جميع الحقوق محفوظة."
  }
};

// صفحات مؤقتة (Placeholders) معدلة برمجياً لتبدو أنيقة حتى نبرمجها


// مكون ذكي لرفع الصفحة للأعلى عند التنقل بين الروابط (UX Pro Tip)
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
      {/* تفعيل مكون التمرير للأعلى */}
      <ScrollToTop /> 
      
      <div className="app-container rtl" dir="rtl">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ربط صفحة "من نحن" الحقيقية بالراوتر */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* المسارات الديناميكية من مصفوفتك */}
            {productRoutes.map((route, index) => (
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