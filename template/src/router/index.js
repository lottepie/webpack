import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {
        titleRes: 'title.home'
      },
      component: resolve => require(['../components/layout/Layout.vue'], resolve),
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          meta: {
            titleRes: 'title.dashboard',
            requireAuth: true
          },
          component: resolve => require(['../components/page/Dashboard.vue'], resolve)
        },
        {
          path: 'user',
          meta: {
            titleRes: 'title.user_manage',
            requireAuth: true
          },
          component: resolve => require(['../components/page/UserManage.vue'], resolve)
        },
        {
          path: 'profile',
          meta: {
            titleRes: 'title.profile',
            requireAuth: true
          },
          component: resolve => require(['../components/page/Profile.vue'], resolve)
        }
      ]
    }
  ]
})
