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

export type ChatItemType = {
  id: number
  author: {
    id: number
    name: string
  }
  content: string
  created_at: string
}

export type ChatListType = ChatItemType[]
