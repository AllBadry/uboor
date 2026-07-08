// /src/components/Herosection.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaCogs, FaDatabase, FaProjectDiagram } from 'react-icons/fa';
import '../styles/Hero.css';

const slides = [
  {
    id: 'web',
    tabName: 'تطوير المواقع',
    titleEn: 'Web & Systems',
    titleAr: 'تطوير المواقع والأنظمة',
    desc: 'نقدم لك حلولاً برمجية تتجاوز التوقعات، مع مرونة تامة للتعامل مع أضخم المتطلبات. لوحات تحكم، متاجر، ومنصات تعليمية.',
    colors: { blob1: '#1864ab', blob2: '#f58220', blob3: '#3b82f6' },
    icon: <FaLaptopCode />
  },
  {
    id: 'extensions',
    tabName: 'الإضافات والأتمتة',
    titleEn: 'Extensions',
    titleAr: 'إضافات وأدوات أتمتة',
    desc: 'تطوير إضافات متصفح مخصصة (Scrapers) وأدوات تسريع العمل لزيادة الإنتاجية وتقليل الجهد البشري بنسبة تصل إلى 80%.',
    colors: { blob1: '#8b5cf6', blob2: '#06b6d4', blob3: '#ec4899' },
    icon: <FaCogs />
  },
  {
    id: 'Softwares',
    tabName: "البرمجيات المخصصة",
    titleEn: 'Softwares',
    titleAr: 'برمجيات  مخصصة و مفتوحة',
    desc: 'نصمم برمجيات مخصصة و برمجيات مفتوحة لإثراء و تطوير مجتمع البرمجة ',
    colors: { blob1: '#10b981', blob2: '#1864ab', blob3: '#047857' },
    icon: <FaDatabase />
  },
  {
    id: 'apis',
    tabName: 'خدمات API',
    titleEn: 'API Services',
    titleAr: 'واجهات برمجية',
    desc: 'نوفر واجهات برمجية (APIs) مجانية ومدفوعة، مثل أداة التحقق من الإيميلات، لربط أنظمتك ببيانات دقيقة وموثوقة.',
    colors: { blob1: '#ef4444', blob2: '#f58220', blob3: '#dc2626' },
    icon: <FaProjectDiagram />
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="weaverly-hero-section">
      
      {/* الخلفية السائلة - أداء صاروخي 100% */}
      <div className="fluid-bg-container">
        
        {/* خدعة الـ CSS المتغير (CSS Variables) لحل مشكلة التعليق */}
        <motion.div 
          className="hw-blob hw-blob-1"
          animate={{ "--blob-color": slides[activeTab].colors.blob1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.div 
          className="hw-blob hw-blob-2"
          animate={{ "--blob-color": slides[activeTab].colors.blob2 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.div 
          className="hw-blob hw-blob-3"
          animate={{ "--blob-color": slides[activeTab].colors.blob3 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="noise-overlay"></div>
      </div>

      <div className="hero-white-frame">
        <div className="hero-dynamic-content">
          
          <div className="hero-text-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="dynamic-text-wrapper"
              >
                <h1 className="massive-title-en">{slides[activeTab].titleEn}</h1>
                <h2 className="massive-title-ar">{slides[activeTab].titleAr}</h2>
                <p className="massive-desc">{slides[activeTab].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-visual-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                className="visual-content-wrapper"
              >
                <div className="massive-bg-number">
                  0{activeTab + 1}
                </div>
                
                <motion.div 
                  className="glass-icon-circle"
                  animate={{ y: [-15, 15] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                >
                  {slides[activeTab].icon}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        <div className="hero-tabs-container">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`hero-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {slide.tabName}
              {activeTab === index && (
                <motion.div layoutId="tab-indicator" className="tab-indicator" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}