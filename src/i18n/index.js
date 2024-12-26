import { createI18n } from 'vue-i18n'
import zhLocale from './zh' // 导入项目中用到的中文语言包
import enLocale from './en' // 导入项目中用到的英文语言包

const messages = {
  zh: {
    ...zhLocale
  },
  en: {
    ...enLocale
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh', // 设置语种
  messages, // 设置全局当地语言包,
  fallbackLocale: 'zh'
})

export default i18n


