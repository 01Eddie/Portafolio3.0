import axios, { AxiosInstance } from 'axios'

type Payload = Record<string, unknown>

export const http = function(): AxiosInstance {
  const instance = axios.create({
    baseURL: 'https://smartforms.dev/submit/61700c967a195017922d97ea'
  })

  return instance
}

export function Post<T = any>(route: string, json: Payload | FormData = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    http()
      .post(route, json)
      .then((res) => {
        resolve(res.data)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
