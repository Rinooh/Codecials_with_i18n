import React, { useState, useEffect } from 'react';

const Info = () => {
  const [translations, setTranslations] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

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

  if (!translations) {
    return <div>Loading...</div>;
  }

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const infoItems = [
    {
      title: translations.FreeDesign,
      content: translations.FreeDesignContent,
      className: 'bg-[#00244C] text-orange mt-2 mb-2 border-2 border-orange tracking-wider text-lg',
    },
    {
      title: translations.QualityCode,
      content: translations.QualityCodeContent,
      className: 'bg-[#A15B0B] mt-2 mb-2 border-2 border-white text-white tracking-wider text-lg',
    },
    {
      title: translations.TheTotalPackage,
      content: translations.TheTotalPackageContent,
      className: 'bg-[#00244C] mt-2 mb-2 text-orange border-2 border-orange tracking-wider text-lg',
    },
    {
      title: translations.Maintenance,
      content: translations.MaintenanceContent,
      className: 'bg-[#A15B0B] mt-2 mb-2 border-2 border-white tracking-wider text-white text-lg',
    },
  ];

  return (
    <div className="w-full">
      {infoItems.map((item, index) => (
        <div className={item.className} key={index}>
        <div
          className={`accordion-title ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <div className="flex items-center justify-center p-8 relative">
            <div className='absolute left-[0]'>
              <h2 className='text-sm font-bold' style={{writingMode: "vertical-rl", textOrientation: "upright"}}>{translations.Click}</h2>
              <svg className='absolute left-6 top-1/4' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="currentColor" d="M1 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-1.164 1.818a1.5 1.5 0 0 0-.275-.379l-4-4A1.5 1.5 0 0 0 7 8.5V12H3a2 2 0 0 1-2-2V5Zm7.854 3.146A.5.5 0 0 0 8 8.5v6a.5.5 0 0 0 .9.3l1.35-1.8h2.25a.5.5 0 0 0 .354-.854l-4-4Z"/></svg>
            </div>
            <h3 className='md:text-3xl lg:text-5xl'>{item.title}</h3>
            {index === activeIndex ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 ml-2"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 ml-2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        </div>
        {index === activeIndex && (
          <div className="accordion-content">
            <div className='min-[1023px]:w-6/12 m-auto'>
              <p className='text-sm min-[1023px]:text-base mt-2 p-2'>{item.content}</p>
            </div>
          </div>
        )}
        </div>
      ))}
    </div>
  );
};

export default Info;
