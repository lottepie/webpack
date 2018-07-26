export default {
  name: 'browser',

  /**
   * 设置Title
   * @param {string} title Title
   */
  setTitle (title) {
    window.document.title = title || 'APIStub'
  }
}
