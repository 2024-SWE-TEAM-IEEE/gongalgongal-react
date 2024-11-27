export type NoticeCardIconType = 'DOLLAR' | 'BOOK' | 'AWARD'

export type NoticeItemType = {
  author: string
  categories: { id: number; name: string }[]
  id: number
  noticed_date: string
  starred: boolean
  stored: boolean
  title: string
  content: string
  url: string
}

export type NoticeListType = NoticeItemType[]
