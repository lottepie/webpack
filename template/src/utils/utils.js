export default {
  name: 'utils',
  /**
   * 判断来源是否是手机端
   */
  isMobile () {
    let userAgent = window.navigator.userAgent.toLocaleLowerCase()
    let phoneReg = /iphone|android|symbianos|windows\sphone|micromessenger|qq\/[\d.]+/gi
    return phoneReg.test(userAgent)
  },
  /**
   * 深拷贝
   */
  deepCopy (obj) {
    let copy

    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    if (obj instanceof Date) {
      copy = new Date()
      copy.setTime(obj.getTime())
      return copy
    }

    if (obj instanceof Array) {
      copy = []
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.deepCopy(obj[i])
      }
      return copy
    }

    if (obj instanceof Object) {
      copy = {}
      for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy(obj[attr])
      }
      return copy
    }

    return null
  }
}
