import { FC } from 'react'
import { Root } from './styled'

type TabChatPageProps = {
  className?: string
}

export const TabChatPage: FC<TabChatPageProps> = ({ className }) => {
  return <Root className={className}>TabChatPage</Root>
}
