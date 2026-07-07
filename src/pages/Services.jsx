import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 🌟 تم إضافة FaRobot هنا للأداة الجديدة
import { FaGlobe, FaDesktop, FaProjectDiagram, FaCodeBranch, FaPuzzlePiece, FaCheckCircle, FaArrowLeft, FaServer, FaWhatsapp, FaReact, FaHourglassHalf, FaTimes, FaRobot } from 'react-icons/fa';
import { SiCplusplus, SiMongodb } from 'react-icons/si'; 
import { Link } from 'react-router-dom';
import '../styles/ServicesPage.css';
import SEO from '../components/SEO';


const servicesData = [
  {
    id: "websites",
    title: "المواقع الإلكترونية",
    icon: <FaGlobe />,
    desc: "نبرمج واجهات رقمية سريعة ومتجاوبة تعكس هوية علامتك التجارية وتجذب عملاءك بأحدث تقنيات الويب.",
    examples: ["مواقع تعريفية للشركات والأفراد", "متاجر إلكترونية (E-commerce)", "صفحات هبوط (Landing Pages) للتسويق", "مدونات ومنصات إخبارية"],
    theme: "blue"
  },
  {
    id: "systems",
    title: "تطبيقات الويب والأنظمة",
    icon: <FaDesktop />,
    desc: "نحول العمليات الإدارية المعقدة إلى بيئة رقمية سلسة عبر برمجة أنظمة متكاملة ولوحات تحكم دقيقة.",
    examples: ["أنظمة إدارة المخزون (ERP)", "لوحات التحكم (Dashboards) المركزية", "أنظمة إدارة علاقات العملاء (CRM)", "منصات التعليم الإلكتروني (LMS)"],
    theme: "orange"
  },
  {
    id: "apis",
    title: "واجهات برمجة التطبيقات (API)",
    icon: <FaProjectDiagram />,
    desc: "نوفر واجهات برمجية (APIs) قوية وموثوقة لربط أنظمتك ببعضها البعض أو توفير خدمات بيانات خارجية.",
    examples: ["API التحقق من الإيميلات", "واجهات سحب وتحليل البيانات"],
    theme: "blue"
  },
  {
    id: "opensource",
    title: "البرمجيات المفتوحة المصدر",
    icon: <FaCodeBranch />,
    desc: "إيماناً منا بدور المجتمع التقني، نساهم في بناء وتوفير برمجيات مجانية ومفتوحة للمبرمجين حول العالم.",
    examples: ["أنظمة التخزين اللامركزي", "مكتبات برمجية لتسهيل التطوير", "أدوات التشفير وحماية البيانات"],
    theme: "orange"
  },
  {
    id: "extensions",
    title: "الأدوات وإضافات المتصفح",
    icon: <FaPuzzlePiece />,
    desc: "أدوات ذكية وإضافات متصفح تهدف إلى زيادة إنتاجيتك وتقليل الجهد البشري في المهام اليومية.",
    examples: ["أدوات استخراج البيانات (Web Scrapers)", "إضافات أتمتة مهام التسويق", "بوتات مخصصة للمنصات"],
    theme: "blue"
  }
];

const liveProductsData = [
  {
    id: "wa-collector",
    name: "Uboor WA Collector Pro",
    type: "إضافة متصفح (Extension)",
    status: "متاح مجاناً",
    desc: "أداة متقدمة لاستخراج بيانات جهات الاتصال وأرقام المجموعات من WhatsApp Web بنقرة واحدة، مصممة لتسهيل عمل المسوقين.",
    icon: <FaWhatsapp />,
    link: "/products/wacollector",
    color: "#25D366" 
  },
  {
    id: "data-vault",
    name: "DATA Vault",
    type: "طبقة تخزين لامركزية",
    status: "مفتوح المصدر",
    desc: "نظام تخزين لا نهائي، لامركزي ومشفر بالكامل مبني بـ C++ و React، يستخدم البنية التحتية لمنصات المحادثة كطبقة تخزين آمنة.",
    icon: <FaServer />,
    link: "/products/data-vault", 
    color: "#3b82f6"
  },
  // 🌟 تم استبدال الـ API بالإضافة الجديدة هنا
  {
    id: "auto-capture",
    name: "Uboor Auto Capture Pro",
    type: "إضافة متصفح (Extension)",
    status: "متاح مجاناً",
    desc: "روبوتك الشخصي لأتمتة المهام المكررة. يتيح لك تحديد الأزرار برمجياً وتصوير الشاشة بشكل آلي وذكي لتجنب الحظر.",
    icon: <FaRobot />,
    link: "/products/auto-capture",
    color: "#ec4899" // لون مميز (وردي/بنفسجي)
  }
];

export default function Services() {
  const [showVaultModal, setShowVaultModal] = useState(false);

  // تسريع ظهور الكبسولات والأمثلة المتسلسلة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } }
  };

  return (
    <div className="services-page-wrapper relative">

      <SEO 
        title="خدماتنا ومنتجاتنا" 
        description="اكتشف خدمات عبور الشاملة: برمجة مواقع ويب، تطبيقات ديسكتوب وأنظمة متكاملة (مخزون، موارد بشرية، عيادات، وحجوزات)، منصات رقمية وتعليمية (LMS)، وتطوير لوحات تحكم (Dashboards) تحليلية لإدارة المحتوى."
        keywords="تطوير مواقع ويب, تطبيقات ديسكتوب, نظام إدارة مخزون, نظام إدارة موارد بشرية, أنظمة عيادات, أنظمة حجوزات, منصات رقمية, منصة تعليمية LMS, لوحات تحكم إدارة محتوى, داشبورد إحصائيات, أدوات أتمتة, عبور"
        canonicalUrl="/services"
      />

      <div className="page-ambient-background">
        <div className="ambient-blob blob-blue"></div>
        <div className="ambient-blob blob-orange"></div>
        <div className="ambient-blob blob-light"></div>
      </div>

      <motion.div className="floating-tech-icon" style={{ top: '15%', right: '5%', color: 'rgba(59, 130, 246, 0.05)', fontSize: '10rem', position: 'absolute' }} animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }}><FaReact /></motion.div>
      <motion.div className="floating-tech-icon" style={{ top: '45%', left: '2%', color: 'rgba(245, 130, 32, 0.04)', fontSize: '12rem', position: 'absolute' }} animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }} transition={{ duration: 12, repeat: Infinity }}><SiCplusplus /></motion.div>
      <motion.div className="floating-tech-icon" style={{ bottom: '20%', right: '8%', color: 'rgba(15, 23, 42, 0.03)', fontSize: '8rem', position: 'absolute' }} animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 10, repeat: Infinity }}><SiMongodb /></motion.div>

      {/* 1. قسم الهيرو (ظهور خاطف) */}
      <section className="services-hero">
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }} 
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center"
          >
            <div className="glass-badge mx-auto mb-4">ماذا نقدم؟</div>
            <h1 className="services-main-title">
              ترسانة <span className="text-gradient">رقمية</span> شاملة
            </h1>
            <p className="services-main-subtitle">
              من بناء الأنظمة المعقدة إلى توفير أدوات وإضافات جاهزة للاستخدام، نحن نغطي كافة احتياجاتك التقنية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. قسم المنتجات والأدوات */}
      <section className="live-products-section relative z-10">
        <div className="container">
          <motion.div 
            className="section-header-modern"
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4 }}
          >
            <h2>منتجاتنا <span className="text-orange">وأدواتنا الجاهزة</span></h2>
            <p>برمجيات، إضافات، وواجهات برمجية طورناها في عبور وهي متاحة للاستخدام المباشر أو التضمين في أنظمتك.</p>
          </motion.div>

          <motion.div 
            className="products-glass-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
          >
            {liveProductsData.map((product) => (
              <motion.div 
                key={product.id}
                className="glass-product-card"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <div className="glass-card-glow" style={{ backgroundColor: product.color }}></div>
                <div className="product-card-header">
                  <motion.div 
                    className="product-icon" 
                    style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}dd)` }}
                    whileHover={{ rotate: 180 }} transition={{ duration: 0.4 }}
                  >
                    {product.icon}
                  </motion.div>
                  <div className="product-badges">
                    <span className="badge-type">{product.type}</span>
                    <span className="badge-status">{product.status}</span>
                  </div>
                </div>
                
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                
                <div className="product-footer">
                  {/* هنا يتم فحص المنتج: إذا كان داتا فولت يفتح البوب أب، غير ذلك يذهب للرابط */}
                  {product.id === "data-vault" ? (
                    <button 
                      onClick={() => setShowVaultModal(true)} 
                      className="product-action-link" 
                      style={{ 
                        color: product.color, 
                        background: 'none', border: 'none', cursor: 'pointer', 
                        display: 'flex', alignItems: 'center', gap: '8px', 
                        padding: 0, font: 'inherit', fontWeight: 'bold' 
                      }}
                    >
                      التوثيق والتفاصيل <motion.span animate={{ x: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><FaArrowLeft className="action-icon" /></motion.span>
                    </button>
                  ) : (
                    <Link to={product.link} className="product-action-link" style={{ color: product.color }}>
                      التوثيق والتفاصيل <motion.span animate={{ x: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><FaArrowLeft className="action-icon" /></motion.span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. قسم مجالات العمل (Mega Cards) */}
      <section className="services-mega-list pt-0 relative z-10">
        <div className="container">
          <motion.div 
            className="section-header-modern text-center mb-10"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4 }}
          >
            <h2>مجالات <span className="text-blue">التطوير والبرمجة</span></h2>
            <p>مجالات خبرتنا التقنية التي نقدم فيها خدمات مخصصة للعملاء والشركات.</p>
          </motion.div>

          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              className={`mega-card theme-${service.theme}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ y: -5 }}
            >
              <div className="mega-card-glow"></div>
              <div className="mega-card-content">
                <div className="mega-info-side">
                  <motion.div 
                    className={`mega-icon-wrapper`}
                    animate={{ y: [-5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  >
                    {service.icon}
                  </motion.div>
                  <h2 className="mega-title">{service.title}</h2>
                  <p className="mega-desc">{service.desc}</p>
                </div>

                <div className="mega-examples-side">
                  <h4 className="examples-header">على سبيل المثال:</h4>
                  <div className="examples-grid">
                    {service.examples.map((example, i) => (
                      <motion.div 
                        key={i} 
                        className="example-glass-pill" 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 1)" }}
                      >
                        <FaCheckCircle className="check-icon" />
                        <span>{example}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================================== */}
      {/* 🌟 بوب أب DATA Vault (يظهر فوق كل شيء) 🌟 */}
      {/* ===================================== */}
      <AnimatePresence>
        {showVaultModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0, left: 0,
              width: '100vw', height: '100vh',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 999999,
              padding: '20px',
              direction: 'rtl'
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              style={{
                background: '#ffffff',
                width: '100%',
                maxWidth: '450px',
                borderRadius: '24px',
                padding: '40px 30px',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                textAlign: 'center'
              }}
            >
              {/* زر الإغلاق (X) */}
              <button 
                onClick={() => setShowVaultModal(false)}
                style={{
                  position: 'absolute',
                  top: '20px', left: '20px',
                  background: 'rgba(0,0,0,0.04)',
                  border: 'none', width: '35px', height: '35px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', cursor: 'pointer', transition: '0.3s'
                }}
              >
                <FaTimes />
              </button>

              {/* أيقونة الحالة */}
              <div style={{
                width: '70px', height: '70px',
                background: 'rgba(14, 165, 233, 0.1)',
                color: 'var(--uboor-cyan)',
                borderRadius: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.2rem', margin: '0 auto 20px auto'
              }}>
                <FaHourglassHalf />
              </div>

              {/* نصوص البوب أب */}
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#334155', marginBottom: '12px' }}>
                البرمجية قيد التطوير
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, marginBottom: '30px' }}>
                نحن نعمل بجهد على بناء الطبقة اللامركزية للتخزين المشفر في <strong>DATA Vault</strong>. البرمجية ليست متاحة للاستخدام العام بعد.
              </p>

              {/* زر الإغلاق السفلي */}
              <button 
                onClick={() => setShowVaultModal(false)}
                style={{
                  width: '100%',
                  background: '#f8fafc',
                  color: '#334155',
                  border: '1px solid rgba(0,0,0,0.05)',
                  padding: '14px',
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                حسناً، سأنتظر
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}