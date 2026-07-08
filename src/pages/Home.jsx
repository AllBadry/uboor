// /src/pages/Home.jsx

import React from 'react';
import Herosection from '../components/Herosection';
import Aboutsection from '../components/Aboutsection';
import ServicesSection from '../components/servicesSection';
import CTAsection from '../components/CTAsection';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <SEO 
        title="الرئيسية" 
        description="شركة عبور للحلول البرمجية. متخصصون في تطوير مواقع الويب، تطبيقات الديسكتوب، المنصات الرقمية، والأنظمة الإدارية المتكاملة."
        keywords="شركة برمجة, تطوير مواقع ويب, تطبيقات ديسكتوب, لوحات تحكم, الأردن, Uboor"
        canonicalUrl="/"
      />
      
      <Herosection />
      <Aboutsection />
      <ServicesSection/>
      <CTAsection />
    </div>
  );
}