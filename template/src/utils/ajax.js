/**
 * Created by Liu.p on 2018/6/19.
 */

import axios from 'axios'
import qs from 'qs'
import store from '../store'
import * as types from '../store/types'
import router from '../router'

axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/apis'

axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          if (error.response.data.code === 'E2004') {
            store.commit(types.LOGOUT)
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
            break
          } else {
            return Promise.resolve(error.response)
          }
        case 401:
          store.commit(types.LOGOUT)
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        case 500:
          router.push({
            path: '/500'
          })
          break
      }
    }
    return Promise.reject(error)
  }
)

axios.defaults.transformRequest = [
  (data) => {
    if (data !== undefined && data.json) {
      return JSON.stringify(data.json)
    }
    return qs.stringify(data)
  }
]

export default axios
