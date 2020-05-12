import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import frLocale from 'element-ui/lib/locale/lang/fr'

import { formati18n } from '@/utils/i18n'

const i18nModules: i18nLocaleModel = ['connections', 'settings', 'common', 'about']

const { en, zh, fr }: VueI18n.LocaleMessages = formati18n(i18nModules)

const lang: VueI18n.LocaleMessages = {
  en: { ...en, ...enLocale },
  zh: { ...zh, ...zhLocale },
  fr: { ...fr, ...frLocale },
}

export default lang
