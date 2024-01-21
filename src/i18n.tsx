import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from "@/public/locales/en/translation.json";
import esTranslation from "@/public/locales/es/translation.json";
import deTranslation from "@/public/locales/de/translation.json";
import ltTranslation from "@/public/locales/lt/translation.json";
import elTranslation from "@/public/locales/el/translation.json";
import itTranslation from "@/public/locales/it/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      de: { translation: deTranslation },
      lt: { translation: ltTranslation },
      el: { translation: elTranslation },
      it: { translation: itTranslation },
    },
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;