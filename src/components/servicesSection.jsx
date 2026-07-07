import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaCogs, FaServer, FaArrowLeft } from 'react-icons/fa';
import '../styles/ServicesSection.css';

export default function ServicesSection() {
  // إعدادات الحركات (3D Flip Animations)
  const cardVariant = {
    hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, rotateX: 0, scale: 1, 
      transition: { duration: 0.8, type: "spring", bounce: 0.4 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  return (
    <section className="services-modern-section">
      
      {/* أشكال ديكورية تسبح في الخلفية */}
      <div className="services-ambient-bg">
        <div className="ambient-shape shape-blue"></div>
        <div className="ambient-shape shape-orange"></div>
      </div>

      <div className="container relative z-10">
        
        {/* عنوان القسم */}
        <motion.div 
          className="section-header-centered"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="badge-light mx-auto">ماذا نقدم؟</div>
          <h2 className="section-title centered">
            حلول برمجية <span className="text-orange">عابرة للحدود</span>
          </h2>
          <p className="section-subtitle">
            منصات، تطبيقات، وأنظمة لا مركزية مصممة بأحدث التقنيات لتلبي تطلعات أعمالك.
          </p>
        </motion.div>

        {/* شبكة البطاقات */}
        <motion.div 
          className="services-cards-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* البطاقة الأولى: تطوير المواقع */}
          <motion.div className="service-pro-card" variants={cardVariant} whileHover="hover">
            <div className="card-top-glow blue-glow"></div>
            <motion.div 
              className="service-icon-wrapper blue-bg"
              variants={{ hover: { rotate: 10, scale: 1.1 } }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <FaLaptopCode />
            </motion.div>
            <h3 className="service-title">تطوير المواقع والأنظمة</h3>
            <p className="service-desc">
              نبرمج مواقع تعريفية، متاجر إلكترونية، منصات تعليمية (LMS)، ولوحات تحكم (Dashboards) معقدة وأنظمة إدارة مستخدمين بكفاءة عالية.
            </p>
            <Link to="/services" className="service-link text-blue-link">
              عرض التفاصيل <FaArrowLeft className="link-icon" />
            </Link>
          </motion.div>

          {/* البطاقة الثانية: الإضافات والأتمتة */}
          <motion.div className="service-pro-card" variants={cardVariant} whileHover="hover">
            <div className="card-top-glow orange-glow"></div>
            <motion.div 
              className="service-icon-wrapper orange-bg"
              variants={{ hover: { rotate: -10, scale: 1.1 } }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <FaCogs />
            </motion.div>
            <h3 className="service-title">إضافات المتصفح والأتمتة</h3>
            <p className="service-desc">
              نطور إضافات (Extensions) مخصصة، برمجيات استخراج البيانات (Scrapers)، وأدوات تسريع العمل لزيادة الإنتاجية وتقليل الجهد البشري.
            </p>
            <Link to="/services" className="service-link text-orange-link">
              عرض التفاصيل <FaArrowLeft className="link-icon" />
            </Link>
          </motion.div>

          {/* البطاقة الثالثة: التخزين و APIs */}
          <motion.div className="service-pro-card" variants={cardVariant} whileHover="hover">
            <div className="card-top-glow dark-glow"></div>
            <motion.div 
              className="service-icon-wrapper dark-bg"
              variants={{ hover: { rotate: 10, scale: 1.1 } }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <FaServer />
            </motion.div>
            <h3 className="service-title">Api's و برمجيات متخصصة و مفتوحة</h3>
            <p className="service-desc">
              نقدم حلول تخزين لا نهائية لا مركزية ومشفرة بالكامل، بالإضافة إلى واجهات API مجانية ومدفوعة (مثل التحقق من الإيميلات).
            </p>
            <Link to="/services" className="service-link text-dark-link">
              عرض التفاصيل <FaArrowLeft className="link-icon" />
            </Link>
          </motion.div>
        </motion.div>

        {/* زر عرض كل الخدمات */}
        <motion.div 
          className="text-center mt-60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
            <Link to="/services" className="btn-modern outline-animated">تصفح الكتالوج الكامل</Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}