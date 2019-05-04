import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'

Vue.use(VueI18n)

const i18n = new VueI18n({
  //locale: store.state.lang,
  locale: "en",
  messages: {
    'en': require('./en.json'),
    'ru': require('./ru.json'),
    'uk': require('./uk.json'),
    'de': require('./de.json'),
  },
  fallbackLocale: 'en',
})
/*
if (module.hot) {
  module.hot.accept(['./en.json', './ja.json'], () => {
    i18n.setLocaleMessage('en', require('./en.json'))
    i18n.setLocaleMessage('ja', require('./ja.json'))
    console.log('hot reload', this, arguments)
  })
}
*/

export default i18n