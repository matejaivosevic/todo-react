import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from './translations/en.json'

const resources = {
  en: {
    translation: english
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
