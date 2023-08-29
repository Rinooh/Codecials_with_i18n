import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './src/locales/en/en.json';
import nl from './src/locales/nl/nl.json';

i18n.use(LanguageDetector).init({
  fallbackLng: ['nl'],
  resources: {
    en: {
      translation: en,
    },
    nl: {
      translation: nl,
    },
  },
  preload: ['en', 'nl'],
  supportedLngs: ['en', 'nl'],
},(err, t) => {
  if(err){
      console.error(err);
      throw new Error(err);
  }
});
export default i18n;