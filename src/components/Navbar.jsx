import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaGlobe, FaLaptopCode, FaServer, FaCogs, FaRocket } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [lang, setLang] = useState('AR'); 
  const location = useLocation();

  // تأثير التمرير للجزيرة العائمة
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesHovered(false);
  };
  
  const isActive = (path) => location.pathname === path;
  const toggleLang = () => setLang(lang === 'AR' ? 'EN' : 'AR');

  // إعدادات تتابع ظهور قائمة الموبايل السريعة
  const mobileMenuVariants = {
    hidden: { opacity: 0, clipPath: "circle(0% at 100% 0)" },
    visible: { 
      opacity: 1, 
      clipPath: "circle(150% at 100% 0)",
      transition: { type: "spring", stiffness: 20, restDelta: 2, staggerChildren: 0.08, delayChildren: 0.1 }
    },
    exit: { opacity: 0, clipPath: "circle(0% at 100% 0)", transition: { delay: 0.1, duration: 0.4 } }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } }
  };

  return (
    <>
      {/* الناف بار الرئيسي المتغير */}
      <motion.nav 
        className={`magic-navbar ${scrolled ? 'is-floating' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
      >
        <div className="nav-container-magic">
          
          {/* اللوغو */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <motion.img 
              whileHover={{ scale: 1.05, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              src="./UB.png" 
              alt="Uboor Logo" 
            />
          </Link>

          {/* روابط الديسكتوب */}
          <div className="nav-links desktop-only">
            
            <Link to="/" className={`nav-item-magic ${isActive('/') ? 'active' : ''}`}>
              الرئيسية
              {isActive('/') && <motion.div layoutId="magic-underline" className="magic-active-indicator" />}
            </Link>
            
            <Link to="/about" className={`nav-item-magic ${isActive('/about') ? 'active' : ''}`}>
              من نحن
              {isActive('/about') && <motion.div layoutId="magic-underline" className="magic-active-indicator" />}
            </Link>

            {/* عنصر الخدمات (Mega Menu) */}
            <div 
              className="nav-item-magic-dropdown"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <Link to="/services" className={`nav-item-magic ${isActive('/services') ? 'active' : ''}`}>
                خدماتنا 
                <motion.span animate={{ rotate: isServicesHovered ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="dropdown-arrow">
                  <FaChevronDown />
                </motion.span>
                {isActive('/services') && <motion.div layoutId="magic-underline" className="magic-active-indicator" />}
              </Link>

              {/* الميجا منيو الفخمة (Mega Menu) */}
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div 
                    className="mega-menu-glass"
                    initial={{ opacity: 0, y: 15, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: 10, rotateX: -10 }}
                    transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                    style={{ transformPerspective: 1000 }}
                  >
                    <div className="mega-menu-grid">
                      <Link to="/services" className="mega-link-card blue-hover" onClick={closeMenu}>
                        <div className="mega-icon-box"><FaLaptopCode /></div>
                        <div className="mega-text">
                          <h4>تطوير المواقع والأنظمة</h4>
                          <p>منصات، متاجر، ولوحات تحكم</p>
                        </div>
                      </Link>
                      
                      <Link to="/services" className="mega-link-card orange-hover" onClick={closeMenu}>
                        <div className="mega-icon-box"><FaCogs /></div>
                        <div className="mega-text">
                          <h4>الإضافات والأتمتة</h4>
                          <p>استخراج بيانات وتسريع العمل</p>
                        </div>
                      </Link>

                      <Link to="/services" className="mega-link-card cyan-hover" onClick={closeMenu}>
                        <div className="mega-icon-box"><FaServer /></div>
                        <div className="mega-text">
                          <h4>برمجياتنا المفتوحة & APIs</h4>
                          <p>برمجيات تخزين وحلول برمجية وواجهات ربط</p>
                        </div>
                      </Link>

                      <Link to="/services" className="mega-link-card special-hover" onClick={closeMenu}>
                        <div className="mega-icon-box"><FaRocket /></div>
                        <div className="mega-text">
                          <h4>المنتجات الجاهزة</h4>
                          <p>استكشف أدواتنا المتاحة فوراً</p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* زر التواصل */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
              <Link to="/contact" className="magic-cta-btn">ابدأ مشروعك</Link>
            </motion.div>

            

          </div>

          {/* أزرار الموبايل */}
          <div className="mobile-controls">
            
            <motion.div 
              className="mobile-toggle-btn" 
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.8 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* قائمة الموبايل الزجاجية الكاملة (Fullscreen Glass Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fullscreen-mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mobile-menu-content">
              <motion.div variants={mobileItemVariants}><Link to="/" className="mobile-huge-link" onClick={closeMenu}>الرئيسية</Link></motion.div>
              <motion.div variants={mobileItemVariants}><Link to="/about" className="mobile-huge-link" onClick={closeMenu}>من نحن</Link></motion.div>
              <motion.div variants={mobileItemVariants}><Link to="/services" className="mobile-huge-link" onClick={closeMenu}>الخدمات والمنتجات</Link></motion.div>
              <motion.div variants={mobileItemVariants}><Link to="/contact" className="mobile-huge-link text-orange" onClick={closeMenu}>تواصل معنا الآن</Link></motion.div>
              
              <motion.div variants={mobileItemVariants} className="mobile-menu-footer">
                <p>عَمَّان، الأردن</p>
                <a href="mailto:info@uboor.org">info@uboor.org</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}