import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCogs, FaServer } from 'react-icons/fa';
import Herosection from '../components/Herosection';
import Aboutsection from '../components/Aboutsection';
import ServicesSection from '../components/servicesSection';
import CTAsection from '../components/CTAsection';
import SEO from '../components/SEO';



export default function Home() {
  // --- إعدادات الحركات العامة لباقي الأقسام ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: "spring", bounce: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <div className="home-page-wrapper">

      <SEO 
        title="الرئيسية" 
        description="شركة عبور للحلول البرمجية. متخصصون في تطوير مواقع الويب، تطبيقات الديسكتوب، المنصات الرقمية والتعليمية (LMS)، والأنظمة الإدارية المتكاملة (عيادات، حجوزات، مخزون، وموارد بشرية)، بالإضافة إلى تصميم لوحات التحكم (Dashboards) الذكية."
        keywords="شركة برمجة, تطوير مواقع ويب, تطبيقات ديسكتوب, أنظمة إدارة مخزون, نظام إدارة موارد بشرية, أنظمة عيادات, أنظمة حجوزات, منصات رقمية, منصة تعليمية LMS, لوحات تحكم, داشبورد إحصائيات, إدارة محتوى, مراقبة وتحليل البيانات, الأردن, Uboor"
        canonicalUrl="/"
      />
      
      {/* 1. Hero Section (تم استدعاء المكون المستقل هنا) */}
      <Herosection />

      {/* 2. About Section */}
      <Aboutsection />
        

      {/* 3. Services Section */}
      <ServicesSection/>
       

      {/* 4. Interactive CTA Section */}
      <CTAsection />
        </div>
  );
};