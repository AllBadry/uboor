import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaFacebookF, FaWhatsapp, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/ContactPage.css';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'default',
    message: ''
  });

  // حالات (States) للتحكم في الإرسال والنافذة المنبثقة
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // إرسال البيانات مباشرة ومجاناً عبر FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/a3751a7892cab13697319db6828b5070", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "الاسم": formData.name,
          "البريد الإلكتروني": formData.email,
          "الخدمة المطلوبة": formData.service,
          "الرسالة": formData.message,
          // إعدادات FormSubmit المخفية لترتيب الإيميل
          _subject: `رسالة جديدة من موقع عبور - ${formData.name}`,
          _template: "table" // لتصلك الرسالة منسقة بجدول أنيق
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowSuccessPopup(true); // إظهار البوب أب الفخم الخاص بنا
        setFormData({ name: '', email: '', service: 'default', message: '' }); // تفريغ الحقول
      } else {
        throw new Error("حدث خطأ في الشبكة");
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
      alert("حدث خطأ تقني، يرجى المحاولة لاحقاً.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } }
  };

  return (
    <div className="contact-page-wrapper">
      
      <SEO 
        title="تواصل معنا" 
        description="تواصل مع فريق شركة عبور للحلول البرمجية. نحن هنا للاستماع إلى أفكارك، تقديم استشارات تقنية متخصصة، والبدء بتطوير مشروعك الرقمي أو نظامك الإداري."
        keywords="تواصل معنا, شركة برمجة الأردن, استشارة تقنية, طلب عرض سعر برمجة, تصميم مواقع, تواصل عبور, Uboor contact"
        canonicalUrl="/contact"
      />
      
      {/* البوب أب الفخم (يظهر فقط عند نجاح الإرسال) */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div 
            className="success-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="success-popup-card"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <motion.div 
                className="success-icon-large"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
              >
                <FaCheckCircle />
              </motion.div>
              <h2>تم إرسال رسالتك بنجاح!</h2>
              <p>شكراً لتواصلك مع عبور، لقد استلمنا رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
              <button className="close-popup-btn" onClick={() => setShowSuccessPopup(false)}>حسناً، فهمت</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="page-ambient-background">
        <div className="ambient-blob blob-blue"></div>
        <div className="ambient-blob blob-orange"></div>
      </div>

      <div className="container relative z-10">
        
        <motion.div 
          className="contact-hero"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          {/* توسيط الشارة العلوية بشكل قسري */}
          <div className="glass-badge mb-4" style={{ margin: '0 auto 16px auto', width: 'fit-content' }}>
            تواصل معنا
          </div>
          
          <h1 className="contact-main-title" style={{ textAlign: 'center' }}>
            لنبدأ ببناء <span className="text-gradient">مشروعك القادم</span>
          </h1>
          
          <p className="contact-main-subtitle" style={{ textAlign: 'center' }}>
            سواء كان لديك استفسار، فكرة مشروع مجنونة، أو ترغب في استخدام إحدى أدواتنا، فريق عبور هنا للاستماع إليك وتحويل فكرتك لواقع.
          </p>
        </motion.div>

        <div className="contact-content-grid">
          
          <motion.div className="contact-info-side" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="info-glass-card">
              <div className="info-icon blue"><FaEnvelope /></div>
              <div>
                <h3>البريد الإلكتروني</h3>
                <p>للردود الرسمية والاستفسارات التقنية</p>
                <a href="mailto:info@uboor.org" className="contact-link">info@uboor.org</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="info-glass-card">
              <div className="info-icon orange"><FaWhatsapp /></div>
              <div>
                <h3>الهاتف و واتساب</h3>
                <p>متاحون للرد السريع على استفساراتكم</p>
                <a href="https://wa.me/962798500770" target="_blank" rel="noreferrer" className="contact-link" dir="ltr">0798500770</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="social-links-wrapper">
              <p>تابعنا على الشبكات الاجتماعية:</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/UboorTech" className="social-circle fb"><FaFacebookF /></a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="contact-form-side" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}>
            <div className="form-glass-panel">
              <h2>أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="modern-contact-form">
                
                <div className="input-group">
                  <label>الاسم الكامل</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="أدخل اسمك الكريم..." required disabled={isSubmitting} />
                </div>

                <div className="input-group">
                  <label>البريد الإلكتروني</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@domain.com" required dir="ltr" disabled={isSubmitting} />
                </div>

                <div className="input-group">
                  <label>ما الخدمة التي تهمك؟</label>
                  <select name="service" value={formData.service} onChange={handleChange} required disabled={isSubmitting}>
                    <option value="default" disabled>-- يرجى اختيار نوع الخدمة --</option>
                    <option value="web">تطوير موقع أو متجر إلكتروني</option>
                    <option value="system">برمجة نظام إدارة (Dashboard / ERP)</option>
                    <option value="extension">تطوير إضافة متصفح (Extension / Scraper)</option>
                    <option value="api">استخدام واجهات API (مثل Email checker)</option>
                    <option value="other">استشارة تقنية / أمر آخر</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>تفاصيل رسالتك</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="حدثنا عن فكرتك أو استفسارك هنا..." required disabled={isSubmitting}></textarea>
                </div>

                <motion.button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><FaSpinner className="spinner-icon" /> جاري الإرسال...</>
                  ) : (
                    <>إرسال الرسالة <FaPaperPlane className="send-icon" /></>
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}