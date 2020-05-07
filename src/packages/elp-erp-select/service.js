import axios from 'axios'

export default {
  async getErpList (params = {}, url = '') {
    const data = await axios({ method: 'get', url, params }).then(({ status, data }) => {
      if (status === 200) return Promise.resolve(data)
      return Promise.reject(data)
    }).then(({ code, data }) => {
      if (code && code === 200) return Promise.resolve(data)
      return Promise.reject(data)
    }).catch(_ => {})
    return data
  }
}
