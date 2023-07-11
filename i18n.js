import ru from './trans/ru.json';
import en from './trans/en.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

const language = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('language'));

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'ru',
});

export default i18n;