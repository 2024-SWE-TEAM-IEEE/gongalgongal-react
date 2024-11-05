import { FC } from 'react'
import { Root } from './styled'

type TabGroupPageProps = {
  className?: string
}

export const TabGroupPage: FC<TabGroupPageProps> = ({ className }) => {
  return <Root className={className}>TabGroupPage</Root>
}
