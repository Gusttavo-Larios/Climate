import axios from 'axios'
export const key = 'chave'

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
})

export default api