import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. استدعاء أداة التنقل
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaDownload, FaUsers, FaAddressBook, FaComments, FaMagic, FaShieldAlt, FaGlobe, FaLink, FaImage, FaBusinessTime, FaTimes, FaFolderOpen, FaChrome, FaCheckCircle, FaArrowRight } from 'react-icons/fa'; // 2. إضافة أيقونة السهم
import '../styles/products/WACollector.css'; // تأكد من صحة مسار ملف الـ CSS لديك
import toolZip from './tool.zip?url';
export default function WACollectorPage() {
  const [showInstallGuide, setShowInstallGuide] = useState(false);
  const navigate = useNavigate(); // 3. تهيئة دالة التنقل

  // تمرير الصفحة للأعلى عند الفتح
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="wa-product-wrapper">
      
      {/* ========================================= */}
      {/* 🌟 كود البوب أب (النافذة المنبثقة) 🌟 */}
      {/* ========================================= */}
      <AnimatePresence>
        {showInstallGuide && (
          <motion.div 
            className="install-guide-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="install-guide-card"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              {/* زر إغلاق البوب أب */}
              <button className="close-guide-btn" onClick={() => setShowInstallGuide(false)}>
                <FaTimes />
              </button>
              
              <div className="guide-header text-center">
                <FaCheckCircle className="success-check-icon" style={{ fontSize: '3.5rem', color: '#25D366', marginBottom: '15px' }} />
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>جاري تحميل الأداة...</h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '30px' }}>
                  بما أن الأداة غير مدرجة في متجر جوجل حالياً، يرجى اتباع هذه الخطوات البسيطة لتشغيلها في متصفحك:
                </p>
              </div>

              <div className="guide-steps-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div className="g-step" style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--bg-off-white)', padding: '20px', borderRadius: '15px' }}>
                  <div className="g-icon" style={{ fontSize: '1.5rem', color: '#128C7E', background: 'rgba(37,211,102,0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}><FaFolderOpen /></div>
                  <div className="g-text">
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.15rem', fontWeight: 800 }}>1. فك الضغط (Extract)</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>قم بفك الضغط عن ملف <strong>Uboor-WA-Pro.zip</strong> الذي تم تحميله للتو.</p>
                  </div>
                </div>
                
                <div className="g-step" style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--bg-off-white)', padding: '20px', borderRadius: '15px' }}>
                  <div className="g-icon" style={{ fontSize: '1.5rem', color: '#128C7E', background: 'rgba(37,211,102,0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}><FaChrome /></div>
                  <div className="g-text">
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.15rem', fontWeight: 800 }}>2. افتح إعدادات الإضافات</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>في متصفح كروم، اذهب للرابط <code style={{background:'rgba(0,0,0,0.05)', padding:'2px 6px', borderRadius:'4px', color:'var(--uboor-blue)'}}>chrome://extensions/</code> وقم بتفعيل <strong>"وضع المطور"</strong>.</p>
                  </div>
                </div>

                <div className="g-step" style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--bg-off-white)', padding: '20px', borderRadius: '15px' }}>
                  <div className="g-icon" style={{ fontSize: '1.5rem', color: '#128C7E', background: 'rgba(37,211,102,0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}><FaDownload /></div>
                  <div className="g-text">
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.15rem', fontWeight: 800 }}>3. رفع الأداة (Load Unpacked)</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>اضغط على زر <strong>"تحميل إضافة تم فك ضغطها"</strong>، واختر المجلد الذي فككت ضغطه.</p>
                  </div>
                </div>

              </div>

              <div className="text-center mt-4" style={{ marginTop: '30px', textAlign: 'center' }}>
                <button className="wa-btn-download" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setShowInstallGuide(false)}>
                  حسناً، فهمت الطريقة
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ========================================= */}


      {/* 1. قسم الهيرو للمنتج */}
      <section className="wa-hero-section">
        <div className="wa-ambient-glow"></div>
        <div className="container relative z-10 text-center">
          
          {/* 4. زر الرجوع للخلف هنا */}
          <div style={{ textAlign: 'right', marginBottom: '10px' }}>
            <motion.button 
              onClick={() => navigate(-1)} 
              whileHover={{ x: 5 }} /* حركة خفيفة لليمين عند التأشير */
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaArrowRight /> رجوع
            </motion.button>
          </div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            
            <motion.div variants={fadeUp} className="wa-icon-large">
              <FaWhatsapp />
            </motion.div>
            
            <motion.div variants={fadeUp} className="wa-badge-info mx-auto mb-4">
              إضافة متصفح مجانية (Chrome Extension)
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="wa-main-title">
              Uboor WA Collector <span className="text-gradient-wa">Pro</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="wa-main-subtitle">
              الرفيق التقني الأقوى للمسوقين ورواد الأعمال. استخرج أي قائمة أرقام من WhatsApp Web بضغطة زر واحدة، وصدرها في جداول (Excel / CSV) عالية الدقة والتنظيم.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              {/* زر التحميل الذي يفتح البوب أب */}
              <a 
  href={toolZip} /* السحر هنا: سيقوم السيرفر بتوليد الرابط المثالي تلقائياً */
  download="Uboor-WA-Collector-Pro.zip" /* هذا هو الاسم الذي سينزل به الملف للمستخدم، يمكنك كتابة ما تشاء هنا */
  className="wa-btn-download"
  onClick={() => setShowInstallGuide(true)}
>
  <FaDownload /> تحميل الإضافة مجاناً
</a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 2. القاعدة الذهبية وحالات الاستخدام (Documentation) */}
      <section className="wa-docs-section">
        <div className="container">
          
          <motion.div className="wa-docs-header text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2>💡 القاعدة الذهبية: كيف تعمل الأداة؟</h2>
            <p>
              تعمل الأداة بتقنية <strong>"القراءة البصرية الذكية"</strong>؛ أي أنها تستخرج البيانات من القائمة المفتوحة أمامك على الشاشة في لحظة تشغيلها. لذلك، يمكنك استخدامها لثلاثة أغراض مختلفة تماماً بناءً على الشاشة التي تفتحها.
            </p>
          </motion.div>

          <motion.div className="wa-use-cases-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            
            <motion.div className="wa-use-case-card" variants={fadeUp}>
              <div className="wa-uc-icon"><FaUsers /></div>
              <h3>1. استخراج "أعضاء المجموعات"</h3>
              <span className="wa-badge-info">الأكثر طلباً للمسوقين (Leads)</span>
              <ul className="wa-steps-list">
                <li>افتح مجموعة الواتساب المطلوبة.</li>
                <li>اضغط على "اسم المجموعة" بالأعلى لفتح القائمة الجانبية.</li>
                <li>انزل للأسفل واضغط على <strong>"عرض الكل" (View All)</strong>.</li>
                <li>اضغط على أيقونة إضافة <strong>Uboor</strong> ثم اختر <strong>🚀 بدء الاستخراج</strong>.</li>
              </ul>
            </motion.div>

            <motion.div className="wa-use-case-card" variants={fadeUp}>
              <div className="wa-uc-icon"><FaAddressBook /></div>
              <h3>2. استخراج "جميع جهات الاتصال"</h3>
              <span className="wa-badge-info">لأخذ نسخة احتياطية (Backup)</span>
              <ul className="wa-steps-list">
                <li>في الشاشة الرئيسية للواتساب، اضغط على <strong>"محادثة جديدة" 💬</strong>.</li>
                <li>ستفتح لك قائمة تحتوي على جميع أرقامك المسجلة.</li>
                <li>افتح إضافة <strong>Uboor</strong> واضغط على <strong>🚀 بدء الاستخراج</strong>.</li>
              </ul>
            </motion.div>

            <motion.div className="wa-use-case-card" variants={fadeUp}>
              <div className="wa-uc-icon"><FaComments /></div>
              <h3>3. استخراج "المحادثات النشطة"</h3>
              <span className="wa-badge-info">للأرقام غير المسجلة أيضاً</span>
              <ul className="wa-steps-list">
                <li>ابقَ في <strong>الشاشة الرئيسية</strong> للواتساب.</li>
                <li>افتح إضافة <strong>Uboor</strong> واضغط على <strong>🚀 بدء الاستخراج</strong>.</li>
                <li><strong style={{color: '#128C7E'}}>ملاحظة:</strong> سيتم استخراج الاسم مع "آخر رسالة متبادلة".</li>
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. ماذا يحدث بعد التشغيل؟ + الميزات الاحترافية */}
      <section className="wa-features-section">
        <div className="container">
          <div className="wa-features-layout">
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '30px', color: 'var(--text-main)' }}>⏳ ماذا يحدث بعد الضغط على Start؟</h2>
              <div className="wa-timeline">
                <div className="wa-step-box">
                  <div className="wa-step-dot">1</div>
                  <p>ستقوم الأداة بعمل <strong>تمرير تلقائي (Auto-Scroll)</strong> ببطء للأسفل ثم للأعلى لضمان عدم تفويت أي رقم.</p>
                </div>
                <div className="wa-step-box">
                  <div className="wa-step-dot">2</div>
                  <p><strong>يُرجى عدم لمس الماوس أو إغلاق الشاشة</strong> حتى تنتهي العملية.</p>
                </div>
                <div className="wa-step-box">
                  <div className="wa-step-dot">3</div>
                  <p>ستظهر نافذة منبثقة بجدول النتائج. اضغط على <strong>Download CSV</strong> لتحصل على بياناتك مفلترة.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '30px', color: 'var(--text-main)' }}>✨ ميزات (Pro) الحصرية</h2>
              <div className="wa-pro-grid">
                <motion.div className="wa-pro-item" variants={fadeUp}>
                  <FaLink className="wa-pro-icon" />
                  <div>
                    <h4>توليد روابط Wa.me</h4>
                    <p>رابط مباشر لكل رقم لبدء المحادثة فوراً من الإكسيل.</p>
                  </div>
                </motion.div>
                <motion.div className="wa-pro-item" variants={fadeUp}>
                  <FaImage className="wa-pro-icon" />
                  <div>
                    <h4>استخراج الصور الشخصية</h4>
                    <p>جلب روابط الصور الشخصية للحسابات (إن وُجدت).</p>
                  </div>
                </motion.div>
                <motion.div className="wa-pro-item" variants={fadeUp}>
                  <FaMagic className="wa-pro-icon" />
                  <div>
                    <h4>فلترة وتنظيف ذكي</h4>
                    <p>تجاهل الكلمات المزعجة لبيانات نظيفة 100%.</p>
                  </div>
                </motion.div>
                <motion.div className="wa-pro-item" variants={fadeUp}>
                  <FaBusinessTime className="wa-pro-icon" />
                  <div>
                    <h4>كشف حسابات الأعمال</h4>
                    <p>تحديد الأرقام التي تستخدم "WhatsApp Business".</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. قسم الخصوصية والأمان */}
      <section className="wa-security-section">
        <div className="container">
          <motion.div className="wa-security-box" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <FaShieldAlt className="wa-shield" />
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px', color: 'var(--text-main)' }}>🔒 الخصوصية والأمان أولاً</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              في <strong>عبور</strong>، نلتزم بأعلى معايير الأمان. تعمل هذه الأداة <strong>محلياً بالكامل (Client-Side Only)</strong> داخل متصفحك. لا يتم إرسال، نسخ، أو تخزين أي بيانات على سيرفراتنا أبداً. كما أنها <strong>آمنة تماماً وتحمي حسابك من أي مخاطر حظر (Anti-Ban Safe)</strong>.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}