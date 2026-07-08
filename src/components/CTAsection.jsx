// /src/components/CTAsection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaFacebookF, FaArrowLeft } from 'react-icons/fa';
import '../styles/CTAsection.css'; // تأكد من مسار الستايل

export default function CTASection() {
  return (
    <section className="cta-modern-section">
      
      {/* دوائر ديكورية في الخلفية تعطي عمقاً للتصميم */}
      <div className="cta-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="cta-glass-wrapper"
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
        >
          {/* أيقونة طافية فوق البطاقة */}
          <motion.div 
            className="cta-floating-icon"
            animate={{ y: [-10, 10], rotate: [-5, 5] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <FaPaperPlane />
          </motion.div>

          <h2 className="cta-title">
            هل أنت مستعد <span className="text-blue">لعبور</span> آفاق جديدة؟
          </h2>
          <p className="cta-desc">
            سواء كانت فكرتك مجرد رسم على ورق، أو نظاماً معقداً يحتاج إلى تطوير، فريقنا التقني جاهز لتحويلها إلى واقع ملموس بأعلى معايير الجودة والأمان.
          </p>
          
          {/* منطقة الأزرار التفاعلية */}
          <div className="cta-actions-container">
            
            {/* الزر الرئيسي */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-modern primary large-btn cta-main-btn">
                ابدأ مشروعك الآن <FaArrowLeft className="btn-icon-left" />
              </Link>
            </motion.div>

            {/* كبسولات التواصل المباشر (Contact Pills) */}
            <div className="cta-direct-contacts">
              
              <motion.a 
                href="mailto:info@uboor.org" 
                className="contact-pill" 
                whileHover={{ y: -5 }}
              >
                <div className="pill-icon blue"><FaEnvelope /></div>
                <span>info@uboor.org</span>
              </motion.a>

              <motion.a 
                href="tel:+962798500770" /* ضع رقم الهاتف الحقيقي هنا */
                className="contact-pill" 
                whileHover={{ y: -5 }}
              >
                <div className="pill-icon orange"><FaPhoneAlt /></div>
                <span dir="ltr">+962 79 850 0770</span>
              </motion.a>

              <motion.a 
                href="https://www.facebook.com/UboorTech" /* ضع رابط صفحة الفيسبوك الحقيقي هنا */
                target="_blank" 
                rel="noreferrer" 
                className="contact-pill" 
                whileHover={{ y: -5 }}
              >
                <div className="pill-icon fb-color"><FaFacebookF /></div>
                <span>صفحتنا على فيسبوك</span>
              </motion.a>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}