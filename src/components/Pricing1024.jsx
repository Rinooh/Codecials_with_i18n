import React, { useState, useEffect } from 'react';

const Pricing1024 = () => {
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

  if (!translations) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-5 pr-5">
      <div className="bg-[#001B7A] rounded-lg shadow-lg p-6">
        <div className="text-3xl text-white text-center font-bold mb-4">Basic Essentials</div>
        <div className="accordion-content">
          <a href='#contact' className='w-max text-orange block m-auto px-4 py-2 text-xl border-4 rounded-xl hover:border-white border-orange tracking-wider m-auto font-medium'>{translations.GetStarted}</a>
          <br />
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.SEOOptimized}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.CustomDesign}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.MaxPagesOne}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.DomainAndHosting}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' className='max-xl:-pl-8' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.MaxCosts750}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00397A] rounded-lg shadow-2xl p-6">
        <div className="text-3xl text-white text-center font-bold mb-4">Premium Plus</div>
        <div className="accordion-content">
          <a href="#contact" className='w-max text-orange block m-auto px-4 py-2 text-xl border-4 rounded-xl hover:border-white border-orange tracking-wider m-auto font-medium'>{translations.GetStarted}</a>
          <br />
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.SEOOptimized}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.CustomDesign}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.DomainAndHosting}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.MaxPagesUnlimited}</h1>
            </div>
          </div>
          
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.ContinuedSupport}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.CMS}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark'  />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.MaxCosts2500}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#04007A] rounded-lg shadow-lg p-6">
        <div className="text-3xl text-white text-center font-bold mb-4">Ultimate VIP</div>
        <div className="accordion-content">
          <a href='#contact' className='w-max text-orange block m-auto px-4 py-2 text-xl border-4 rounded-xl hover:border-white border-orange tracking-wider m-auto font-medium'>{translations.GetStarted}</a>
          <br />
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.SEOOptimized}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.CustomDesign}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.DomainAndHosting}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.MaxPagesUnlimited}</h1>
            </div>
          </div>
          
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.ContinuedSupport}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.CMS}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.PWAMobile}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.FastlaneDevelopment}</h1>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="icon w-max flex-none">
              <img src='icons/checkV2.png' width={40} height={40} alt='Checkmark' loading="lazy" />
            </div>
            <div className="text-white pl-5 max-xl:mr-5 min-xl:mr-10 text-lg grow text-center -ml-4 w-full">
              <h1 className="font-['Orbitron']">{translations.MaxCosts8500}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing1024;