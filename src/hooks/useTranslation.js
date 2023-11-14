// src/hooks/useTranslation.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import my from "../locales/my.json";

const resources = {
  en: {
    translation: en,
  },
  my: {
    translation: my,
  },
};

const languageStorageKey = 'selectedLanguage';

// Get the initially selected language from local storage or fallback to 'en'
const initialLanguage = localStorage.getItem(languageStorageKey) || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, languageStorageKey };
