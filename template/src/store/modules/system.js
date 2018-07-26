import * as types from '../types'
import {systemProp} from '../../api/system'

export default {
  state: {
    props: {},
    schemes: []
  },
  getters: {},
  mutations: {
    [types.FETCH_SYSTEM_PROP]: (state, props) => {
      state.props = props
    }
  },
  actions: {
    [types.FETCH_SYSTEM_PROP]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        systemProp().then(response => {
          const data = response.data
          commit(types.FETCH_SYSTEM_PROP, data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
