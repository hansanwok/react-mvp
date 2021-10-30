/* eslint-disable no-param-reassign */
// baseURL: 'https://api.uway.asia/wp-json/wp/v2'
import axios from 'axios'
import queryString from 'query-string'

const axiosInstance = axios.create({
  baseURL: 'https://api.nookpte.com/wp-json/wp/v2',
})


axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url) {
      // append key
      config.url = queryString.stringifyUrl({
        url: config.url,
      })
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
