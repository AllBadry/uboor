import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaTerminal, FaSearchDollar, FaGlobe, FaHandsHelping, FaCubes, FaCode, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/AboutUs.css'; 

export default function AboutUs() {
  // إعدادات الحركات المتقدمة
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // حركة خاصة لظهور الكلمات تباعاً
  const wordAnimation = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }
  };

  const titleWords = "نحن عبور، حيث تلتقي التكنولوجيا بالابتكار.".split(" ");

  return (
    <div className="about-page-wrapper">
      
      {/* 1. قسم الهيرو الإبداعي */}
      <section className="about-hero-header">
        {/* شبكة نقاط في الخلفية (Dot Pattern) */}
        <div className="hero-dot-pattern"></div>
        <div className="header-bg-glow"></div>

        {/* أشكال عائمة تقنية */}
        <motion.div className="floating-tech-icon icon-1" animate={{ y: [0, -20, 0], rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}><FaCode /></motion.div>
        <motion.div className="floating-tech-icon icon-2" animate={{ y: [0, 30, 0], rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><FaRocket /></motion.div>

       {/* أضفنا خصائص Flexbox لضمان التوسيط الجذري */}
        <div className="container relative z-10" style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            
            {/* توسيط الشارة (Badge) */}
            <motion.div variants={fadeUp} className="badge-light mb-6" style={{ margin: '0 auto 24px auto', width: 'fit-content' }}>
              <span className="pulse-dot"></span> هويتنا التقنية
            </motion.div>
            
            {/* التوسيط المثالي للكلمات المتحركة باستخدام Flex و Gap بدلاً من Margins */}
            <h1 className="about-page-title" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              {titleWords.map((word, index) => (
                <motion.span key={index} variants={wordAnimation}>
                  {word === "عبور،" ? <span className="text-blue">عبور،</span> : word}
                </motion.span>
              ))}
            </h1>
            
            {/* توسيط النص الفرعي */}
            <motion.p variants={fadeUp} className="about-page-subtitle" style={{ textAlign: 'center' }}>
              لسنا مجرد شركة برمجة تقليدية، بل نحن <strong>منظومة تقنية متكاملة</strong> تهدف إلى تمكين الأعمال، وتسليح المبرمجين والمسوقين بأدوات تصنع الفارق.
            </motion.p>
            
          </motion.div>
        </div>
      </section>

      {/* 2. قسم فلسفة الشركة (مع نافذة التيرمينال) */}
      <section className="about-philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <motion.div 
              className="philosophy-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <h2 className="section-title">رؤيتنا تتجاوز <br/><span className="text-orange outline-text">كتابة الأكواد</span></h2>
              <div className="desc-box">
                <p>
                  تأسست شركة <strong>عبور</strong> لتكون الجسر الذي يعبر بالشركات نحو التحول الرقمي الحقيقي. نحن نقوم ببرمجة وبناء منصات ويب معقدة، تطبيقات سطح مكتب (Desktop Apps)، وأنظمة إدارة ولوحات تحكم (Dashboards) فائقة الدقة.
                </p>
                <p>
                  لكن طموحنا لا يتوقف عند المستخدم النهائي. نحن نؤمن بأن تطور التكنولوجيا يبدأ بدعم مجتمع التقنيين أنفسهم. لذلك، نخصص جزءاً كبيراً من مواردنا لبناء أدوات للمطورين والمسوقين، لتسهيل أعمالهم وزيادة إنتاجيتهم.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="philosophy-visual"
              initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            >
              {/* نافذة Terminal زجاجية */}
              <div className="glass-terminal-card">
                <div className="terminal-header">
                  <div className="mac-btns"><span className="red"></span><span className="yellow"></span><span className="green"></span></div>
                  <div className="terminal-title">uboor-vision.js</div>
                </div>
                <div className="terminal-body">
                  <p><span className="code-keyword">const</span> <span className="code-var">company</span> = <span className="code-string">"Uboor"</span>;</p>
                  <p><span className="code-keyword">let</span> <span className="code-var">mission</span> = [</p>
                  <p className="code-indent"><span className="code-string">"Build Complex Systems"</span>,</p>
                  <p className="code-indent"><span className="code-string">"Empower Developers"</span>,</p>
                  <p className="code-indent"><span className="code-string">"Provide Open Source APIs"</span></p>
                  <p>];</p>
                  <p className="mt-2 text-gray"><span className="code-func">executeMission</span>(mission); <span className="typing-cursor">|</span></p>
                </div>
                
                {/* الإحصائيات مدمجة أسفل التيرمينال */}
                <div className="terminal-stats">
                  <div className="t-stat"><h3>+10</h3><span>أدوات مفتوحة</span></div>
                  <div className="t-stat"><h3>API</h3><span>واجهات قوية</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. لمن نقدم حلولنا؟ (Bento Grid Style) */}
      <section className="about-target-section">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">لمن نبني برمجياتنا؟</h2>
            <p className="section-subtitle">حلولنا مصممة بدقة لتلبية احتياجات السوق الرقمي الشامل.</p>
          </motion.div>

          <motion.div 
            className="bento-target-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* بطاقة الشركات (بطاقة كبيرة تأخذ مساحة عرضية) */}
            <motion.div className="bento-card bento-large" variants={fadeUp}>
              <div className="bento-bg-icon"><FaGlobe /></div>
              <div className="target-icon blue"><FaGlobe /></div>
              <div className="bento-content">
                <h3>لأصحاب الأعمال والمشاريع</h3>
                <p>نحول الأفكار إلى واقع رقمي ملموس. نطور مواقع تعريفية، متاجر إلكترونية، لوحات تحكم (Dashboards)، وتطبيقات مصممة لتسريع وتبسيط إدارة الشركات بشكل احترافي.</p>
              </div>
            </motion.div>

            {/* بطاقة المبرمجين */}
            <motion.div className="bento-card" variants={fadeUp}>
              <div className="target-icon dark"><FaTerminal /></div>
              <div className="bento-content">
                <h3>للمطورين والمبرمجين</h3>
                <p>نحن شركة يحبها المبرمجون! نوفر (APIs) قوية، ونساهم في دعم مجتمع المطورين بأدوات مفتوحة المصدر.</p>
              </div>
            </motion.div>

            {/* بطاقة المسوقين */}
            <motion.div className="bento-card" variants={fadeUp}>
              <div className="target-icon orange"><FaSearchDollar /></div>
              <div className="bento-content">
                <h3>للمسوقين وخبراء SEO</h3>
                <p>نبتكر أدوات تسويقية متقدمة وإضافات متصفح (Extensions) لاستخراج البيانات وأتمتة المهام وضمان الصدارة.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. قسم المساهمة المجتمعية (Glass Panel) */}
      <section className="about-community-section">
        <div className="container">
          <motion.div 
            className="community-box glass-panel-premium"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="community-glow"></div>
            <div className="community-content">
              <div className="icon-badge"><FaHandsHelping /></div>
              <h2>البرمجيات المفتوحة وإضافات المتصفح</h2>
              <p>
                سواء كنت تبحث عن أداة لاستخراج البيانات (Scraping) أو إضافة لتسريع عملك اليومي، مكتبتنا تحتوي على خيارات مجانية وأخرى مدفوعة فائقة التطور. نحن في عبور نؤمن بأن المعرفة يجب أن تُشارك.
              </p>
              <Link to="/services" className="btn-modern outline-animated mt-4">
                استكشف أدواتنا المفتوحة
              </Link>
            </div>
            <div className="community-graphics">
              <motion.div animate={{ rotate: [0, 10, 0], y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="glass-cube"><FaCubes /></motion.div>
              <motion.div animate={{ rotate: [0, -15, 0], y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="glass-cube small"><FaLaptopCode /></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}