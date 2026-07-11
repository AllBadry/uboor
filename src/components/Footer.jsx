// /src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  // 1. الدخول السينمائي للفوتر بالكامل
  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1], // منحنى سينمائي فاخر
        staggerChildren: 0.15 
      } 
    }
  };

  // 2. ظهور الأعمدة بوزن وهيبة
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  // 3. حركة الروابط (انزياح ناعم لليسار)
  const linkHover = {
    rest: { x: 0, color: "inherit" },
    hover: { 
      x: -8, // التحرك لليسار في الواجهة العربية
      color: "#3b82f6", 
      transition: { type: "spring", stiffness: 300, damping: 15 } 
    }
  };

  return (
    <motion.footer 
      className="modern-pro-footer"
      style={{ position: 'relative', overflow: 'hidden' }} // لاحتواء تأثيرات الإضاءة
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      {/* إضاءة خلفية خافتة جداً لزيادة الفخامة */}
      <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(59, 130, 246, 0.05)', filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '250px', height: '250px', background: 'rgba(245, 130, 32, 0.03)', filter: 'blur(60px)', borderRadius: '50%', pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">
          
          {/* العمود الأول: الهوية والوصف */}
          <motion.div className="footer-col brand-col" variants={itemVariants}>
            <Link to="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
<motion.img 
  src="./UB.png" 
  alt="Uboor" 
  width="45" 
  height="45"
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.8, ease: "anticipate" }}
  style={{ width: '45px', height: '45px', objectFit: 'contain' }}
/>
              <span className="logo-text">عبور</span>
            </Link>
            <p className="footer-desc">
              شركة تكنولوجيا متعددة الجوانب تتخصص في برمجة المواقع، الأنظمة ، والحلول البرمجية المبتكرة التي تعبر بأعمالك نحو المستقبل.
            </p>
          </motion.div>

          {/* العمود الثاني: الروابط السريعة */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-title">روابط سريعة</h3>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
              {['الرئيسية', 'من نحن', 'خدماتنا وحلولنا', 'تواصل معنا'].map((item, index) => (
                <motion.li 
                  key={index} 
                  initial="rest" 
                  whileHover="hover" 
                  animate="rest"
                  style={{ marginBottom: '12px' }}
                >
                  <motion.div variants={linkHover}>
                    <Link to={index === 0 ? '/' : index === 1 ? '/about' : index === 2 ? '/services' : '/contact'} style={{ display: 'inline-block', width: '100%' }}>
                      {item}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* العمود الثالث: معلومات التواصل */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-title">تواصل معنا</h3>
            <ul className="footer-contact-info" style={{ listStyle: 'none', padding: 0 }}>
              <motion.li whileHover={{ scale: 1.02, x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <FaMapMarkerAlt className="contact-icon text-blue" />
                <span> عمّان، الأردن</span>
              </motion.li>
              <motion.li whileHover={{ scale: 1.02, x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="tel:+962785290948">
                  <FaPhoneAlt className="contact-icon text-orange" />
                  <span dir="ltr">+962 785290948</span>
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.02, x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="mailto:info@uboor.com">
                  <FaEnvelope className="contact-icon text-blue" />
                  <span>info@uboor.com</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* العمود الرابع: السوشيال ميديا */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-title">تابعنا</h3>
            <div className="social-icons" style={{ display: 'flex', gap: '15px' }}>
              <motion.a 
                href="https://www.facebook.com/UboorTech" target="_blank" rel="noreferrer" className="social-btn facebook" aria-label="حسابنا على فيسبوك"
                whileHover={{ y: -5, scale: 1.1, boxShadow: '0px 10px 20px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn instagram" aria-label="حسابنا على إنستغرام"
                whileHover={{ y: -5, scale: 1.1, boxShadow: '0px 10px 20px rgba(14, 165, 233, 0.4)' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://github.com/Uboor-Company" target="_blank" rel="noreferrer" className="social-btn github" aria-label="حسابنا على جيت هاب"
                whileHover={{ y: -5, scale: 1.1, boxShadow: '0px 10px 20px rgba(30, 41, 59, 0.4)' }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* الشريط السفلي للحقوق */}
        <motion.div 
          className="footer-bottom" 
          variants={itemVariants}
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '40px', paddingTop: '20px' }}
        >
          <div className="footer-bottom-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
            <p>© 2026 شركة <span className="text-blue font-bold">عبور</span> للحلول البرمجية والأنظمة. جميع الحقوق محفوظة.</p>
            <div className="footer-bottom-links">
              <motion.div whileHover={{ color: '#3b82f6' }}>
                <Link to="/privacy">سياسة الخصوصية لدى عبور</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}