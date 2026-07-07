import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, canonicalUrl, ogImage }) {
  const siteUrl = "https://uboor.org";
  const fullCanonical = `${siteUrl}${canonicalUrl}`;
  const fullImage = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/UB.png`;

  return (
    <Helmet>
      {/* الأساسيات */}
      <title>{title} | عبور</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* رابط Canonical لمنع تكرار المحتوى */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonical} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}