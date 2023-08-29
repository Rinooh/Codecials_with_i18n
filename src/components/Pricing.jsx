import React, { useState, useEffect } from 'react';
import Accordion from './Accordion.jsx';
import Pricing1024 from './Pricing1024.jsx';

const Pricing = () => {
  const [isViewportLarge, setIsViewportLarge] = useState(false);
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    fetch(`/locales/${navigator.language}.json`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return fetch('/locales/en.json').then((response) => response.json());
        }
      })
      .then((data) => setTranslations(data))
      .catch((error) => {
        console.error('Error fetching translation:', error);
      });
  }, []);

  const checkViewportSize = () => {
    setIsViewportLarge(window.innerWidth >= 1024);
  };

  useEffect(() => {
    checkViewportSize();
    window.addEventListener('resize', checkViewportSize);

    return () => {
      window.removeEventListener('resize', checkViewportSize);
    };
  }, []);

  if (!translations) {
    return <div>Loading...</div>;
  }

  const items = [
    {
      title: 'Basic Essentials',
      icon: 'icons/void.png',
      sentenceIcon: 'icons/checkV2.png',
      content: [
        translations.SEOOptimized,
        translations.CustomDesign,
        translations.MaxPagesOne, 
        translations.DomainAndHosting, 
        translations.MaxCosts750
      ],
      className: 'bg-[#001B7A] w-full border-t-2 border-orange tracking-wider text-white text-center text-2xl',
    },
    {
      title: 'Premium Plus',
      icon: 'icons/oneStar.png',
      sentenceIcon: 'icons/checkV2.png',
      content: [
        translations.SEOOptimized,
        translations.CustomDesign,
        translations.DomainAndHosting, 
        translations.MaxPagesUnlimited, 
        translations.ContinuedSupport, 
        translations.CMS,
        translations.MaxCosts2500
      ],
      className: 'border-t-2 w-full border-orange text-white tracking-wider text-center text-2xl',
    },
    {
      title: 'Ultimate VIP',
      icon: 'icons/multipleStars.png',
      sentenceIcon: 'icons/checkV2.png',
      content: [
        translations.SEOOptimized,
        translations.CustomDesign,
        translations.DomainAndHosting, 
        translations.MaxPagesUnlimited, 
        translations.ContinuedSupport, 
        translations.CMS,
        translations.PWAMobile,
        translations.FastlaneDevelopment,
        translations.MaxCosts8500
      ],
      className: 'bg-[#04007A] w-full border-t-2 border-orange tracking-wider text-white text-center text-2xl',
    },
  ];
  return (
    <>
      {isViewportLarge ? (
        <Pricing1024 />
      ) : (
          <Accordion items={items} />
        )}
    </>
  )
}

export default Pricing