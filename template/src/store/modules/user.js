import * as types from '../types'
import { login, logout, regist, profile } from '../../api/user'

export default {
  state: {
    user: {}
  },
  getters: {
    isLoginUser: state => {
      // return (state.user.userId > 0)
      return true
    }
  },
  mutations: {
    [types.LOGIN]: (state, user) => {
      state.user = user
    },
    [types.LOGOUT]: (state) => {
      state.user = {}
    },
    [types.REGIST]: (state, user) => {
      state.user = user
    },
    [types.FETCH_USER_INFO]: (state, user) => {
      state.user = user
    }
  },
  actions: {
    [types.LOGIN]: ({ commit }, userInfo) => {
      const account = userInfo.account
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login(account, password).then(response => {
          const data = response.data
          commit(types.LOGIN, data.user)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    [types.LOGOUT]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          const result = Boolean(response.data.result)
          if (result) {
            commit(types.LOGOUT)
            commit(types.CLEAR_PERMISSION)
            resolve()
          } else {
            reject(response)
          }
        }).catch(error => {
          // 死循环处理
          commit(types.LOGOUT)
          commit(types.CLEAR_PERMISSION)
          reject(error)
        })
      })
    },
    [types.REGIST]: ({ commit }, userInfo) => {
      const token = userInfo.token
      const username = userInfo.username
      const password = userInfo.password
      const email = userInfo.email
      return new Promise((resolve, reject) => {
        regist(username, password, email, token).then(response => {
          const data = response.data
          commit(types.REGIST, data.user)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    [types.FETCH_USER_INFO]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        profile().then(response => {
          const data = response.data
          if (data.code) {
            reject(response)
          } else {
            commit(types.FETCH_USER_INFO, data.user)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
