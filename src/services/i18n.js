import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from 'translations/en.json'
import vi from 'translations/vi.json'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => {
    const lang = localStorage.getItem('lang') || 'vi'
    localStorage.setItem('lang', lang)
    cb(lang)
  },
  init: () => {},
  cacheUserLanguage: () => {},
}

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    // namespace
    ns: ['common', 'features', 'components'],
    fallbackLng: 'en',
    debug: false,
    react: {
      bindI18n: 'languageChanged',
      useSuspense: true,
    },
    resources: {
      en,
      vi,
    },
  })
