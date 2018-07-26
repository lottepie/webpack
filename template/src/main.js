{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import router from './router'
import store from './store'
import browser from './utils/browser'
import locale from './utils/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import ElementLocale from 'element-ui/lib/locale'
import ajax from './utils/ajax'
import utils from './utils/utils'
import './stylus/index.styl'
import './assets/font/iconfont.css'

Vue.use(Vuex)
Vue.prototype.$ajax = ajax
Vue.use(ElementUI, {
  size: 'medium'
})
locale.init()
Vue.config.lang = locale.get()
Vue.use(VueI18n)
Vue.prototype.$utils = utils

const messages = {
  'en-US': Object.assign(require('./locale/lang/en-US'), enLocale),
  'zh-CN': Object.assign(require('./locale/lang/zh-CN'), zhLocale),
  'ja-JP': Object.assign(require('./locale/lang/ja-JP'), jaLocale)
}
const i18n = new VueI18n({
  locale: locale.get() || locale.getBrowserLanguage(),
  fallbackLocale: 'zh-CN',
  messages: messages
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (to.path === '/' || to.matched.some(record => record.meta.requireAuth)) {
    if (!store.getters.isLoginUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      if (to.meta.title) {
        browser.setTitle(to.meta.title)
      } else if (to.meta.titleRes) {
        browser.setTitle(i18n.t(to.meta.titleRes))
      } else {
        browser.setTitle('undefined')
      }
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
