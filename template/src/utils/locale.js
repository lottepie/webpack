import * as Cookies from 'js-cookie'

const DEFAULT_LOCALE = 'zh-CN'

export default {
  name: '_locale',

  set (locale) {
    Cookies.set('_locale', locale, {
      domain: this.getServerDomain(),
      path: '/'
    })
  },
  get () {
    return Cookies.get('_locale', {
      domain: this.getServerDomain(),
      path: '/'
    })
  },
  getBrowserLanguage () {
    let browserLang = navigator.language || navigator.browserLanguage
    if (browserLang === 'zh') {
      browserLang = 'zh-CN'
    } else if (browserLang === 'ja') {
      browserLang = 'ja-JP'
    }
    return browserLang
  },
  getServerDomain () {
    let domain = window.document.domain
    return domain.substring(domain.indexOf('.'))
  },
  init () {
    this.set(this.get() || this.getBrowserLanguage() || DEFAULT_LOCALE, {
      domain: this.getServerDomain(),
      path: '/'
    })
  }
}
