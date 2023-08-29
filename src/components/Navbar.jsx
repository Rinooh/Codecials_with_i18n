import React, { useState, useEffect } from 'react';
import './navbarStyle.css';

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
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

  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked");
          setMenuClass("menu visible block absolute border-r-4 text-orange z-30 max-45 !h-[45vh] rounded-br-full min-[1024px]:invisible");
      }
      else {
          setBurgerClass("burger-bar unclicked");
          setMenuClass("menu hidden");
      }
      setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
      <div className='h-20 min-[1023px]:hidden mx-auto'>
        <button href="/" className="text-orange text-4xl pt-5 pl-5 block w-max float-left absolute">Code<a href="/" className="text-white">cials</a>.</button>
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
          </div>
        </nav>

        <div className={menu_class}>
          <ul>
            <li><button href="/" className="text-orange text-4xl pt-5 pl-5 block w-max">Code<a href="/" className="text-white">cials</a>.</button></li>
            <li className='my-5'><hr className="text-orange border-t-4" /></li>
            <li className='ml-5 my-5'><a className="text-white text-3xl" href="#projects"><img width={50} height={50} className='h-9 w-auto float-left' src="icons/boldfiles.png" alt="Projects Icon" />&nbsp;{translations.Projects}</a></li>
            <li className='ml-5 mt-5'><a className="text-white text-3xl" href="#info"><img width={50} height={50} className='h-9 w-auto float-left' src="icons/info.png" alt="Info Icon" />&nbsp;{translations.Info}</a></li>
            <li className='ml-5 mt-5'><a className="text-white text-3xl" href="#contact"><img width={50} height={50} className='h-9 w-auto float-left' src="icons/support.png" alt="Support Icon" />&nbsp;{translations.Contact}</a></li>
          </ul>
        </div>
      </div>
      <div className='h-20 max-[1023px]:hidden mx-auto container'>
        <button href="/" className="text-orange hover:text-white text-4xl pt-5 pl-5 block w-max float-left absolute">Code<a href="/" className="text-white hover:text-orange">cials</a>.</button>
        <ul className='list-none p-0 flex justify-end'>
          <li className='ml-5 my-5 float-left w-fit'><a className="text-white hover:text-orange text-3xl" href="#projects"><img width={50} height={50} className='h-9 w-auto mr-2 float-left' src="icons/boldfiles.png" alt="Projects Icon" />{translations.Projects}</a></li>
          <li className='ml-5 mt-5 float-left w-fit'><a className="text-white hover:text-orange text-3xl" href="#info"><img width={50} height={50} className='h-9 w-auto mr-2 float-left' src="icons/info.png" alt="Info Icon" />{translations.Info}</a></li>
          <li className='ml-5 mt-5 float-left w-fit'><a className="text-white hover:text-orange text-3xl pr-5" href="#contact"><img width={50} height={50} className='h-9 w-auto mr-2 float-left' src="icons/support.png" alt="Support Icon" />{translations.Contact}</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar