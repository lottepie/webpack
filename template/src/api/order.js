import urls from '../constants/urls'
import ajax from '../utils/ajax'

/**
 * 服务方案情报取得
 * @method POST
 * @returns {AxiosPromise}
 */
export function schemeInfo () {
  return ajax.post(urls.ORDER_SCHEME_LIST)
}

/**
 * 创建订单
 * @method POST
 * @param order 订单信息
 * @returns {AxiosPromise}
 */
export function create (order) {
  return ajax.post(urls.ORDER_CREATE, {
    json: order
  })
}

/**
 * 订单一览取得
 * @method POST
 * @returns {AxiosPromise}
 */
export function list () {
  return ajax.post(urls.ORDER_LIST)
}

/**
 * 订单情报取得
 * @method POST
 * @param orderId 订单ID
 * @returns {AxiosPromise}
 */
export function detail (orderId) {
  return ajax.post(urls.ORDER_DETAIL, {
    orderId
  })
}

/**
 * 订单取消
 * @method POST
 * @param orderId 订单ID
 * @returns {AxiosPromise}
 */
export function cancel (orderId) {
  return ajax.post(urls.ORDER_CANCEL, {
    orderId
  })
}

/**
 * 未支付订单取得
 * @method POST
 * @returns {AxiosPromise}
 */
export function unpaid () {
  return ajax.post(urls.ORDER_UNPAID)
}
