import { commonAxios, CommonResponseType } from './common'

type Type = {
  notices: {
    author: string
    categories: { id: number; name: string }[]
    id: number
    noticed_date: string
    starred: boolean
    stored: boolean
    title: string
  }[]
}

export const getNotices = async () => {
  return await commonAxios('GET')('notices', {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
