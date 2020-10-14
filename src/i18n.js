import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translation.json';
import translationPT_BR from './locales/pt-br/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT_BR
  }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "en",
    keySeparator: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
