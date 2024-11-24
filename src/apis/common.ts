import axios from 'axios'

export const REQUEST_URL = 'http://35.216.28.245:8080/api'

type AxiosType = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export const commonAxios = (type: AxiosType) => async (url: string, params: any) => {
  const washedUrl = `${REQUEST_URL}/${url}`

  if (type === 'GET') {
    return await axios.get(washedUrl, { params })
  }
  if (type === 'POST') {
    return await axios.post(washedUrl, params)
  }
  if (type === 'PATCH') {
    return await axios.patch(washedUrl, params)
  }
  if (type === 'DELETE') {
    return await axios.delete(washedUrl, { params })
  }
}

export type CommonResponseType<P> = {
  success: boolean
  data: P
  error: any
}
