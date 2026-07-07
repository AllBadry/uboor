import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCrosshairs, FaVectorSquare, FaPlay, FaChrome, FaCheckCircle, FaRobot, FaCogs ,FaArrowRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import autoCaptureZipUrl from './autoCollector.zip?url';

export default function AutoCapturePage() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'var(--font-cairo)', direction: 'rtl', paddingBottom: '80px' }}>
      
      {/* ==================== 1. قسم الهيرو ==================== */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white', padding: '120px 20px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 0.05, scale: 1 }} 
          transition={{ duration: 2 }}
          style={{ position: 'absolute', top: '-10%', right: '-5%', fontSize: '25rem', color: '#3b82f6', zIndex: 0 }}
        >
          <FaRobot />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          
          {/* 🌟 زر العودة تم نقله هنا ليكون مرئياً ويتماشى مع المحتوى 🌟 */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '30px' }}>
            <button 
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.05rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
            >
              <FaArrowRight /> العودة للخدمات
            </button>
          </div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span style={{ display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '8px 20px', borderRadius: '50px', fontWeight: 'bold', marginBottom: '20px' }}>
              أداة أتمتة جديدة
            </span>
            <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '20px' }}>Uboor <span style={{ color: '#3b82f6' }}>Auto Capture</span> Pro</h1>
            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '40px' }}>
              روبوتك الشخصي لأتمتة المهام المكررة. حدد الزر، ارسم منطقة التصوير، ودع الأداة تقوم بالضغط والتقاط الشاشة مئات المرات بشكل آلي وذكي لتجنب الحظر.
            </p>
            
            <a 
              href={autoCaptureZipUrl} 
              download="Uboor-Auto-Capture-Pro.zip" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#3b82f6', color: 'white', padding: '15px 35px', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)', transition: '0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <FaDownload /> تحميل الأداة مجاناً (.ZIP)
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. قسم كيفية العمل ==================== */}
      <section style={{ maxWidth: '1000px', margin: '-40px auto 0', position: 'relative', zIndex: 10, padding: '0 20px' }}>
        <motion.div 
          style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', color: '#1e293b', fontWeight: '900' }}>كيف تعمل الأداة؟</h2>
            <p style={{ color: '#64748b' }}>3 خطوات بسيطة لتشغيل الأتمتة على أي موقع</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* الخطوة 1 */}
            <motion.div variants={fadeUp} style={{ textAlign: 'center', padding: '30px 20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', fontSize: '2rem', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <FaCrosshairs />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '10px', fontWeight: 'bold' }}>1. استهداف الزر</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>اضغط على "تحديد الزر" في الإضافة، ثم انقر على الزر المطلوب في الموقع ليتم حفظ مساره البرمجي بدقة.</p>
            </motion.div>

            {/* الخطوة 2 */}
            <motion.div variants={fadeUp} style={{ textAlign: 'center', padding: '30px 20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', fontSize: '2rem', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <FaVectorSquare />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '10px', fontWeight: 'bold' }}>2. منطقة التصوير</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>اضغط على "رسم منطقة التصوير" واستخدم الماوس لرسم مربع حول الجزء الذي تريد أرشفته من الشاشة.</p>
            </motion.div>

            {/* الخطوة 3 */}
            <motion.div variants={fadeUp} style={{ textAlign: 'center', padding: '30px 20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', fontSize: '2rem', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <FaPlay />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '10px', fontWeight: 'bold' }}>3. التشغيل الآمن</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>حدد عدد الصور ووقت التأخير العشوائي، ثم اضغط بدء. ستعمل الأداة بتوقيتات عشوائية لتجنب الحظر.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ==================== 3. قسم التثبيت والدليل ==================== */}
      <section style={{ maxWidth: '1000px', margin: '60px auto 0', padding: '0 20px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', borderBottom: '2px solid #f1f5f9', paddingBottom: '20px' }}>
            <FaCogs style={{ fontSize: '2.5rem', color: '#475569' }} />
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: '900', margin: 0 }}>دليل التثبيت (للمتصفح)</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>1</div>
              <p style={{ fontSize: '1.1rem', color: '#475569', margin: '5px 0 0' }}>قم بتحميل الملف المضغوط من الزر بالأعلى، ثم <strong>قم بفك الضغط عنه (Extract Here)</strong> في مجلد على جهازك.</p>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>2</div>
              <p style={{ fontSize: '1.1rem', color: '#475569', margin: '5px 0 0' }}>افتح متصفح جوجل كروم <FaChrome style={{ color: '#10b981' }}/> واذهب إلى الرابط التالي: <code style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', color: '#ef4444', fontWeight: 'bold', fontSize: '1rem' }}>chrome://extensions/</code></p>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>3</div>
              <p style={{ fontSize: '1.1rem', color: '#475569', margin: '5px 0 0' }}>في أعلى يمين الشاشة، قم بتفعيل خيار <strong>وضع المطور (Developer mode)</strong>.</p>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>4</div>
              <p style={{ fontSize: '1.1rem', color: '#475569', margin: '5px 0 0' }}>اضغط على زر <strong>"تحميل إضافة تم فك ضغطها" (Load unpacked)</strong> واختر المجلد الذي قمت بفك الضغط فيه.</p>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', background: 'rgba(34, 197, 94, 0.1)', padding: '15px', borderRadius: '12px', marginTop: '10px' }}>
              <FaCheckCircle style={{ color: '#22c55e', fontSize: '1.5rem', marginTop: '3px', flexShrink: 0 }} />
              <p style={{ fontSize: '1.1rem', color: '#166534', margin: 0, fontWeight: 'bold' }}>أصبحت الأداة جاهزة الآن! يمكنك تثبيتها (Pin) في شريط المتصفح العلوي لسهولة الوصول إليها.</p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}