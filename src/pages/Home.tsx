import React from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "../components/sections/home/Hero";
import { ServicesSummary } from "../components/sections/home/ServicesSummary";
import { AboutSummary } from "../components/sections/home/AboutSummary";
import { SuccessStoriesSummary } from "../components/sections/home/SuccessStoriesSummary";
import { Contact } from "../components/sections/home/Contact";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Data Sparta - Empowering SMBs with Data Solutions</title>
        <meta name="description" content="Data Sparta provides tailored data solutions for SMBs, including managed data platforms, analytics services, and training programs. Transform your business with data-driven insights." />
        <meta name="keywords" content="data solutions, SMB data analytics, business intelligence, data platform, analytics training, Perth data services" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Data Sparta - Empowering SMBs with Data Solutions" />
        <meta property="og:description" content="Transform your business with tailored data solutions. Managed platforms, analytics services, and training programs for SMBs." />
        <meta property="og:image" content="https://lwfiles.mycourse.app/64e1593f6f801424e29f5705-public/1d5fd27821ece5e922916b2404eafcf8.png" />
        <meta property="og:url" content="https://datasparta.com.au" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Sparta - Data Solutions for SMBs" />
        <meta name="twitter:description" content="Transform your business with tailored data solutions. Expert analytics services for SMBs." />
        <meta name="twitter:image" content="https://lwfiles.mycourse.app/64e1593f6f801424e29f5705-public/1d5fd27821ece5e922916b2404eafcf8.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Data Sparta" />
        <meta name="geo.region" content="AU-WA" />
        <meta name="geo.placename" content="Perth" />
        <link rel="canonical" href="https://datasparta.com.au" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Data Sparta",
              "description": "Data Sparta provides tailored data solutions for SMBs, including managed data platforms, analytics services, and training programs.",
              "url": "https://datasparta.com.au",
              "logo": "https://lwfiles.mycourse.app/64e1593f6f801424e29f5705-public/1d5fd27821ece5e922916b2404eafcf8.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Perth",
                "addressRegion": "WA",
                "addressCountry": "AU"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61410677503",
                "contactType": "customer service",
                "email": "contact@datasparta.com.au"
              },
              "sameAs": [
                "https://www.linkedin.com/company/data-sparta"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="flex flex-col">
        <Hero />
        <ServicesSummary />
        <AboutSummary />
        <SuccessStoriesSummary />
        <Contact />
      </div>
    </>
  );
}