import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCogs, FaServer } from 'react-icons/fa';
import Herosection from '../components/Herosection';
import Aboutsection from '../components/Aboutsection';
import ServicesSection from '../components/servicesSection';
import CTAsection from '../components/CTAsection';
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