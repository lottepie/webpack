import urls from '../constants/urls'
import ajax from '../utils/ajax'

/**
 * 用户登录
 * @method POST
 * @param account 账号
 * @param password 密码
 * @returns {AxiosPromise}
 */
export function login (account, password) {
  return ajax.post(urls.USER_AUTH_LOGIN, {
    account,
    password
  })
}

/**
 * 用户注销
 * @method POST
 * @returns {AxiosPromise}
 */
export function logout () {
  return ajax.post(urls.USER_AUTH_LOGOUT)
}

/**
 * 用户权限取得
 * @method POST
 * @returns {AxiosPromise}
 */
export function fetchPermission () {
  return ajax.post(urls.USER_AUTH_PERMISSION)
}

/**
 * 用户注冊
 * @method POST
 * @param username 用户名
 * @param password 密码
 * @param email 邮箱
 * @param token
 * @returns {AxiosPromise}
 */
export function regist (username, password, email, token) {
  return ajax.post(urls.USER_REGIST, {
    username,
    password,
    email,
    token
  })
}

/**
 * 用户信息取得
 * @method POST
 * @returns {AxiosPromise}
 */
export function profile () {
  return ajax.post(urls.USER_PROFILE)
}

/**
 * 用户信息取得
 * @method POST
 * @param userId 用户ID
 * @returns {AxiosPromise}
 */
export function userInfo (userId) {
  return ajax.post(urls.USER_PROFILE, {
    userId
  })
}

/**
 * 用户头像上传
 * @method POST
 * @param avatarL 用户头像(大)
 * @param avatarM 用户头像(中)
 * @param avatarS 用户头像(小)
 * @returns {AxiosPromise}
 */
export function avatarUpload (avatarL, avatarM, avatarS) {
  return ajax.post(urls.USER_AVATAR_UPLOAD, {
    avatarL,
    avatarM,
    avatarS
  })
}

/**
 * 用户头像取得
 * @method POST
 * @param userId 用户ID
 * @param size 头像大小
 * @returns {AxiosPromise}
 */
export function avatar (userId, size) {
  return ajax.post(urls.USER_AVATAR, {
    userId,
    size
  })
}

/**
 * 用户头像删除
 * @method POST
 * @returns {AxiosPromise}
 */
export function avatarRemove () {
  return ajax.post(urls.USER_AVATAR_REMOVE)
}

/**
 * 用户邮箱修改
 * @method POST
 * @param password 密码
 * @param email 新邮箱
 * @returns {AxiosPromise}
 */
export function emailChange (password, email) {
  return ajax.post(urls.USER_EMAIL_CHANGE, {
    password,
    email
  })
}

/**
 * 用户密码重置
 * @method POST
 * @param oldPassword 旧密码
 * @param newPassword 新密码
 * @returns {AxiosPromise}
 */
export function passwordReset (oldPassword, newPassword) {
  return ajax.post(urls.USER_PASSWORD_RESET, {
    oldPassword,
    newPassword
  })
}

/**
 * 认证邮件重新发送
 * @method POST
 * @returns {AxiosPromise}
 */
export function certEmailResend () {
  return ajax.post(urls.USER_CERT_EMAIL_RESEND)
}

/**
 * 用户忘记密码
 * @method POST
 * @param email 邮箱
 * @returns {AxiosPromise}
 */
export function passwordForgot (email) {
  return ajax.post(urls.USER_PASSWORD_FORGOT, {
    email
  })
}

/**
 * 认证码检查
 * @method POST
 * @param captcha 认证码
 * @returns {AxiosPromise}
 */
export function checkCaptcha (captcha) {
  return ajax.post(urls.USER_CHECK_CAPTCHA, {
    captcha
  })
}

/**
 * 邮件唯一性检查
 * @method POST
 * @param email 邮箱
 * @returns {AxiosPromise}
 */
export function emailUnique (email) {
  return ajax.post(urls.USER_UNIQUE, {
    email
  })
}

/**
 * 用户名唯一性检查
 * @method POST
 * @param username 用户名
 * @returns {AxiosPromise}
 */
export function usernameUnique (username) {
  return ajax.post(urls.USER_UNIQUE, {
    username
  })
}
