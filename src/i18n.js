import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import i18nextHttpBackend from 'i18next-http-backend';

i18n
  .use(i18nextHttpBackend)
  .use(detector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    fallbackLng: "en",
    keySeparator: true,
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;
