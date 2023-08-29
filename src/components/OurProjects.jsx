import React, { useState, useEffect } from 'react';
import Carousel from './slider.jsx';
import OurProjectsV2 from './Accordion1024.jsx';
import './OurProjects.css';

const OurProjects = () => {
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

  const slides = [
    { image: 'images/cocials.avif', text: translations.CocialsDescription },
    { image: 'images/dbz.avif', text: translations.DBZDescription },
    { image: 'images/school.avif', text: translations.HoornhekDescription },
  ];

  return (
    <>
      {isViewportLarge ? (
        <OurProjectsV2 />
      ) : (
        <Carousel slides={slides} />
      )}
    </>
  )
}

export default OurProjects