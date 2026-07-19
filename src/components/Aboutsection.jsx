// src/components/AboutSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaUsers, FaCodeBranch, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/AboutSection.css';

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

const generateParticles = () => {
  const colors = ['#0ea5e9', '#f59e0b', '#06b6d4', '#8b5cf6', '#ec4899'];
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 3,
    duration: Math.random() * 4 + 3, // تم تسريع حركة الجسيمات
    delay: Math.random() * 2,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
};

export default function AboutSection({ data = defaultData, customStyles = {} }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // 🌟 الحل الجذري للأداء: استخدام متغيرات CSS للماوس لمنع إعادة تصيير React نهائياً
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      ref.current.style.setProperty('--mouse-x', `${x}px`);
      ref.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  const [particles] = useState(() => generateParticles());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // تم تسريع وتنعيم حركة الطيران
  const floatingVariants = (index) => ({
    animate: {
      y: [0, -15 - index * 2, 0, 15 + index * 2, 0],
      x: [0, index % 2 === 0 ? 10 : -10, 0, index % 2 === 0 ? -10 : 10, 0],
      transition: {
        duration: 3 + index * 0.3, // أسرع بكثير
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  });

  return (
    <section ref={ref} className="about-modern-section" style={customStyles}>
      
      {/* ========== الخلفية السريعة مع الجسيمات ========== */}
      <div className="about-background">
        <motion.div className="bg-orb orb-1" animate={{ x: [0, 50, 0, -50, 0], y: [0, -40, 0, 40, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="bg-orb orb-2" animate={{ x: [0, -40, 0, 40, 0], y: [0, 40, 0, -40, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="bg-orb orb-3" animate={{ x: [0, 30, 0, -30, 0], y: [0, -30, 0, 30, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="bg-orb orb-4" animate={{ x: [0, -30, 0, 30, 0], y: [0, 30, 0, -30, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />

        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="bg-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,  /* 🌟 تم إضافة px هنا لحل مشكلة عدم الظهور */
              height: `${p.size}px`, /* 🌟 تم إضافة px هنا لحل مشكلة عدم الظهور */
              backgroundColor: p.color,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
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
        <motion.div className="about-header-center" variants={containerVariants} initial="hidden" animate={controls}>
          <motion.div variants={itemVariants} className="badge-light">{data.badge}</motion.div>
          <motion.h2 variants={itemVariants} className="about-title">
            {data.title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                style={{ display: 'inline-block', marginLeft: '6px' }}
                className={word === 'عبور' ? 'text-cyan' : word === 'Uboor' ? 'text-orange' : ''}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p variants={itemVariants} className="about-description">{data.description}</motion.p>
          <motion.div variants={itemVariants} className="about-action">
            <Link to={data.linkTo} className="link-arrow-modern">
              {data.linkText} <span>&#8592;</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ========== البطاقات العائمة ========== */}
        <motion.div className="floating-elements-container" variants={containerVariants} initial="hidden" animate={controls}>
          {data.cards.map((card, index) => (
            /* الغلاف الخارجي يتولى تأثير الماوس بمتغيرات CSS فقط */
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="parallax-wrapper"
              style={{
                transform: `translate(calc(var(--mouse-x, 0px) * ${0.5 + index * 0.2}), calc(var(--mouse-y, 0px) * ${0.5 + index * 0.2}))`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* الغلاف الداخلي يتولى الطيران والانيميشن بدون تضارب */}
              <motion.div
                className="floating-item"
                animate={floatingVariants(index).animate}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="floating-icon" style={{ background: `linear-gradient(135deg, var(--${card.color}-gradient))` }}>
                  {card.icon}
                </div>
                <div className="floating-text">
                  <span className="floating-title">{card.title}</span>
                  <span className="floating-desc">{card.desc}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}