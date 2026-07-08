// src/components/AboutSection.jsx
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaUsers, FaCodeBranch, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/AboutSection.css';

// =============================================
// بيانات افتراضية قابلة للتخصيص
// =============================================
const defaultData = {
  badge: 'من نحن',
  title: 'نحن عبور Uboor، نبني التكنولوجيا بشغف.',
  description: 'لسنا مجرد شركة برمجيات، بل بيئة تقنية متكاملة تدمج بين هندسة النظم المعقدة، التخزين اللامركزي، وفرق العمل ذاتية الإدارة لصناعة الفارق الرقمي.',
  linkText: 'تعرف على رؤيتنا',
  linkTo: '/about',
  cards: [
    { 
      icon: <FaCodeBranch />, 
      title: 'هندسة ويب', 
      desc: 'نصمم ونبني أنظمة ويب قابلة للتطوير والاستدامة.', 
      color: 'blue' 
    },
    { 
      icon: <FaServer />, 
      title: 'مصدر مفتوح', 
      desc: 'نؤمن بالشفافية ونساهم في مجتمع المصادر المفتوحة.', 
      color: 'orange' 
    },
    { 
      icon: <FaUsers />, 
      title: 'إدارة لامركزية', 
      desc: 'نحن نتبنى نماذج القيادة التشاركية والفرق ذاتية الإدارة.', 
      color: 'cyan' 
    },
  ]
};

// 1. يفضل كتابة دالة التوليد خارج المكون (أو داخله) لترتيب الكود
const generateParticles = () => {
  const colors = ['#0ea5e9', '#f59e0b', '#06b6d4', '#8b5cf6', '#ec4899'];
  return Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 3,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
};


export default function AboutSection({ data = defaultData, customStyles = {} }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // تأثير Parallax بالماوس
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // تشغيل الأنيميشن عند الظهور
  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  // توليد الجسيمات للخلفية (نقاط صغيرة ملونة)

  // 2. استخدام التهيئة الكسولة لحالة الجسيمات
  // تمرير الدالة هنا يجعل React ينفذها مرة واحدة فقط عند البداية
  // ولن نحتاج إلى useEffect أو setParticles أبداً لهذا الغرض!
  const [particles] = useState(() => generateParticles());

  // متغيرات الأنيميشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingVariants = (index) => ({
    animate: {
      y: [
        0, 
        -25 - index * 5, 
        0, 
        25 + index * 5, 
        0
      ],
      x: [
        0, 
        index % 2 === 0 ? 15 : -15, 
        0, 
        index % 2 === 0 ? -15 : 15, 
        0
      ],
      transition: {
        duration: 4.5 + index * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.3,
      },
    },
  });

  return (
    <section ref={ref} className="about-modern-section" style={customStyles}>
      {/* ========== الخلفية البيضاء مع العناصر الطائرة ========== */}
      <div className="about-background">
        {/* دوائر ضبابية ملونة متحركة */}
        <motion.div
          className="bg-orb orb-1"
          animate={{
            x: [0, 80, 0, -80, 0],
            y: [0, -60, 0, 60, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-orb orb-2"
          animate={{
            x: [0, -70, 0, 70, 0],
            y: [0, 70, 0, -70, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-orb orb-3"
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -40, 0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-orb orb-4"
          animate={{
            x: [0, -40, 0, 40, 0],
            y: [0, 50, 0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* جسيمات الخلفية (نقاط ملونة) */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="bg-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
            }}
            animate={{
              y: [0, -40, 0, 40, 0],
              x: [0, 30, 0, -30, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ========== المحتوى الرئيسي ========== */}
      <div className="container about-hero-layout">
        <motion.div
          className="about-header-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="badge-light">
            {data.badge}
          </motion.div>

          <motion.h2 variants={itemVariants} className="about-title">
            {data.title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                style={{ display: 'inline-block', marginRight: '6px' }}
                className={word === 'عبور' ? 'text-cyan' : word === 'Uboor' ? 'text-orange' : ''}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p variants={itemVariants} className="about-description">
            {data.description}
          </motion.p>

          <motion.div variants={itemVariants} className="about-action">
            <Link to={data.linkTo} className="link-arrow-modern">
              {data.linkText} <span>&#8592;</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ========== البطاقات العائمة ========== */}
        <motion.div
          className="floating-elements-container"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {data.cards.map((card, index) => (
            <motion.div
              key={index}
              className="floating-item"
              variants={cardVariants}
              animate={floatingVariants(index).animate}
              whileHover={{ scale: 1.08, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                transform: `translate(${mousePos.x * (0.3 + index * 0.15)}px, ${mousePos.y * (0.3 + index * 0.15)}px)`,
              }}
            >
              <div
                className="floating-icon"
                style={{
                  background: `linear-gradient(135deg, var(--${card.color}-gradient))`,
                }}
              >
                {card.icon}
              </div>
              <div className="floating-text">
                <span className="floating-title">{card.title}</span>
                <span className="floating-desc">{card.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}