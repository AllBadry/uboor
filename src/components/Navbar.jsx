import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // مراقبة التمرير لإضافة التأثير الزجاجي (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // إغلاق قائمة الهاتف تلقائياً عند تغيير الصفحة
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // الروابط الأربعة الأساسية
  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services/' },
    {name: 'منتجاتنا' , path: '/products/' },
    { name: 'من نحن', path: '/about/' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* 1. الشعار (Logo) - يمين */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              className="h-12 w-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
              src="/UB.png" 
              alt="شعار شركة عبور" 
            />
            <span className="font-bold text-2xl bg-gradient-blue bg-clip-text text-transparent">
              عُبـور
            </span>
          </Link>

          {/* 2. الروابط الأربعة (Desktop Links) - منتصف */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="relative text-text-main font-semibold group py-2"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-uboor-cyan">
                  {link.name}
                </span>
                {/* خط ينمو من اليمين لليسار */}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-cyan transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* 3. زر الإجراء (Call to Action Button) - يسار */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden font-bold text-white bg-uboor-blue rounded-full shadow-[0_4px_15px_rgba(24,100,171,0.2)] transition-all duration-300 hover:shadow-[0_4px_25px_rgba(14,165,233,0.5)] active:scale-95 group"
            >
              {/* تأثير الانزلاق اللوني داخل الزر */}
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out bg-gradient-cyan group-hover:-translate-x-full"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out bg-gradient-cyan translate-x-full group-hover:translate-x-0"></span>
              <span className="relative flex items-center gap-2">
                تواصل معنا
                {/* سهم صغير يتحرك لليسار عند التمرير */}
                <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </span>
            </Link>
          </div>

          {/* أيقونة القائمة للهواتف المحمولة */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-main hover:text-uboor-orange focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الهاتف المحمول (Mobile Menu) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md border-b border-gray-100 ${
          isMobileMenuOpen ? 'max-h-80 opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block px-3 py-3 rounded-md text-base font-medium text-text-main hover:text-uboor-blue hover:bg-uboor-blue-light transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-3 rounded-full font-bold text-white bg-gradient-mixed shadow-md active:scale-95 transition-transform"
            >
              طلب استشارة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}