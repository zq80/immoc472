import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'http://127.0.0.1:4523/m1/6319140-6014427-default',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
