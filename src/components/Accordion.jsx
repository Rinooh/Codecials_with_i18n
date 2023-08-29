import React, { useState, useEffect } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
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

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (!translations) {
    return <div>Loading...</div>;
  }

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <div className={item.className} key={index}>
          <div
            className={`accordion-title ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center justify-center">
              <img src={item.icon} alt={item.title} className='pr-5'/>
              <h3>{item.title}</h3>
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
              <a href="#contact" className='text-orange px-8 py-4 my-5 inline-block text-xl border-4 rounded-xl hover:border-white border-orange tracking-wider m-auto font-medium'>{translations.GetStarted}</a>
              <br />
                {item.content.map((nestedItem, nextedIndex) => (
                  <div key={nextedIndex} className='flex items-center'>
                    <div className="icon pl-5 w-max flex-none">
                      <img src={item.sentenceIcon} width={40} height={40} alt={item.content} loading="lazy" />
                    </div>
                    <div key={nextedIndex} className="text grow pr-10 -ml-4 w-9/12">
                      <h1 className="font-['Orbitron']">{nestedItem}</h1>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;