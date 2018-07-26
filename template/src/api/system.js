import urls from '../constants/urls'
import ajax from '../utils/ajax'

/**
 * 系统情报取得
 * @method POST
 * @returns {AxiosPromise}
 */
export function systemInfo () {
  return ajax.post(urls.SYSTEM_INFO)
}

/**
 * 系统设定取得
 * @method POST
 * @returns {AxiosPromise}
 */
export function systemProp () {
  return ajax.post(urls.SYSTEM_PROP)
}
