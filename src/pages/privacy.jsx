// /src/pages/privacy.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserLock, FaCookieBite, FaEnvelopeOpenText } from 'react-icons/fa';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Privacy() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="privacy-page-wrapper" style={{ backgroundColor: 'var(--bg-off-white)', paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
      
      <SEO 
        title="سياسة الخصوصية" 
        description="توضح سياسة الخصوصية لشركة عبور للحلول البرمجية كيفية تعاملنا مع البيانات، ونموذج التواصل، وملفات تعريف الارتباط لضمان تجربة آمنة لزوارنا."
        keywords="سياسة الخصوصية, عبور, حماية البيانات, شروط الاستخدام"
        canonicalUrl="/privacy"
      />

      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* رأس الصفحة */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp} 
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <div className="glass-badge mb-4" style={{ margin: '0 auto 16px auto', display: 'inline-block' }}>حماية بياناتك أولويتنا</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text-main)', marginBottom: '15px' }}>
            سياسة <span className="text-gradient">الخصوصية</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            في شركة <strong>عبور</strong>، نحن نؤمن بالشفافية التامة. موقعنا مصمم لعرض خدماتنا التقنية، ونحن نحترم خصوصيتك لأبعد الحدود.
          </p>
        </motion.div>

        {/* المحتوى الرئيسي (البطاقات الزجاجية) */}
        <motion.div 
          variants={staggerContainer} initial="hidden" animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
        >
          
          {/* القسم الأول: جمع البيانات */}
          <motion.div variants={fadeUp} style={glassCardStyle}>
            <div style={iconWrapperStyle} className="blue-bg"><FaEnvelopeOpenText /></div>
            <h2 style={titleStyle}>1. المعلومات التي نجمعها</h2>
            <p style={textStyle}>
              موقعنا هو منصة تعريفية بخدماتنا. نحن لا نطلب منك إنشاء حساب ولا نجمع بياناتك الشخصية المخفية. المعلومات الوحيدة التي نصل إليها هي تلك التي <strong>تتفضل بتقديمها طواعية</strong> عند استخدامك لـ "نموذج التواصل"، والتي تشمل (الاسم، البريد الإلكتروني، وتفاصيل مشروعك).
            </p>
          </motion.div>

          {/* القسم الثاني: استخدام البيانات */}
          <motion.div variants={fadeUp} style={glassCardStyle}>
            <div style={iconWrapperStyle} className="orange-bg"><FaUserLock /></div>
            <h2 style={titleStyle}>2. كيف نستخدم معلوماتك؟</h2>
            <p style={textStyle}>
              نستخدم المعلومات المرسلة عبر نموذج التواصل لغرض واحد فقط: <strong>التواصل معك والرد على استفسارك التقني أو التجاري</strong>. نحن لا نقوم ببيع، تأجير، أو مشاركة بريدك الإلكتروني مع أي جهات خارجية أو أطراف تسويقية (Spam).
            </p>
          </motion.div>

          {/* القسم الثالث: ملفات الكوكيز */}
          <motion.div variants={fadeUp} style={glassCardStyle}>
            <div style={iconWrapperStyle} className="dark-bg"><FaCookieBite /></div>
            <h2 style={titleStyle}>3. ملفات تعريف الارتباط (Cookies)</h2>
            <p style={textStyle}>
              قد يستخدم موقعنا تقنيات قياسية مثل ملفات تعريف الارتباط (الخاصة بأدوات تحليل الأداء مثل إحصاءات جوجل) لفهم كيفية تفاعل الزوار مع الموقع بهدف تحسين السرعة وتجربة المستخدم. هذه البيانات عامة ولا تحدد هويتك الشخصية.
            </p>
          </motion.div>

          {/* القسم الرابع: الأمان */}
          <motion.div variants={fadeUp} style={glassCardStyle}>
            <div style={iconWrapperStyle} className="blue-bg"><FaShieldAlt /></div>
            <h2 style={titleStyle}>4. أمان البيانات</h2>
            <p style={textStyle}>
              نحن نتخذ تدابير أمنية تقنية لحماية الرسائل التي تصلنا عبر الموقع. يتم إرسال طلباتك عبر قنوات مشفرة لضمان سرية فكرتك أو مشروعك الذي تطرحه علينا.
            </p>
          </motion.div>

        </motion.div>

        {/* تذييل الصفحة (التواصل) */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'rgba(255,255,255,0.6)', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '15px' }}>هل لديك استفسار حول الخصوصية؟</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '20px' }}>
            إذا كان لديك أي سؤال حول كيفية تعاملنا مع بياناتك، فريقنا في عمّان يرحب بتواصلك.
          </p>
          <Link to="/contact" className="btn-modern outline-animated" style={{ display: 'inline-block' }}>
            تواصل معنا الآن
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

// أنماط CSS مدمجة (Inline Styles) لسهولة التركيب والحفاظ على الفخامة
const glassCardStyle = {
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  padding: '40px',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 1)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

const iconWrapperStyle = {
  width: '50px', 
  height: '50px', 
  borderRadius: '14px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  fontSize: '1.4rem', 
  color: 'white', 
  marginBottom: '20px'
};

const titleStyle = {
  fontSize: '1.35rem', 
  fontWeight: 800, 
  color: 'var(--text-main)', 
  marginBottom: '12px'
};

const textStyle = {
  fontSize: '1.05rem', 
  color: 'var(--text-muted)', 
  lineHeight: 1.8, 
  margin: 0
};