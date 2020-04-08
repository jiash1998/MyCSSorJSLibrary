import request from './request.js';
export default {
  getNotice() {
    return request({
      url: `/getAllNotice`,
      method: 'get'
    })
  },
}
