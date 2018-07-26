import * as types from '../types'
import { fetchPermission } from '../../api/user'

export default {
  state: {
    roles: [],
    permissions: []
  },
  getters: {},
  mutations: {
    [types.FETCH_PERMISSION]: (state, {roles, permissions}) => {
      state.roles = roles
      state.permissions = permissions
    },
    [types.CLEAR_PERMISSION]: (state) => {
      state.roles = []
      state.permissions = []
    }
  },
  actions: {
    [types.FETCH_PERMISSION]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        fetchPermission().then(response => {
          const data = response.data
          commit(types.FETCH_PERMISSION, data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
