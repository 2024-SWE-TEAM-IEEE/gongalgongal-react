import { commonAxios, CommonResponseType } from './common'

type Type = {
  notices: {
    id: number
    title: string
    categories: { id: string; name: string }[]
    author: string
    noticed_date: string
    is_stored: boolean
    is_starred: boolean
  }
}

export const getNotices = async () => {
  return await commonAxios('GET')('notices', {}, true).then((res) => {
    if (res) {
      return res.data as CommonResponseType<Type>
    }
  })
}
