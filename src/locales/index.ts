import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './ru/ru.json';

export const translationsJson = {
  ru: {
    translation: ru,
  },
};

export const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translationsJson,
    fallbackLng: 'ru',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false,
    },
  });
