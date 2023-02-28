import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// import EN from './locales/en/translation.json';
// import UA from './locales/ua/translation.json';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    fallbackLng: 'ua',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: 'HOME',
          profile: 'PROFILE',
          logins: 'LOGIN',
          registrations: 'REGISTRATIONS',
        },
      },
      ua: {
        translation: {
          home: 'ДОМАШНЯ',
          profile: 'ПРОФІЛЬ',
          logins: 'ЗАЛОГІНИТИСЯ',
          registrations: 'ЗАРЕЄСТРУВАТИСЯ',
        },
      },
    },
  });

export default i18n;
