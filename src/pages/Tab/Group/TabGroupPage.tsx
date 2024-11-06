import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { FC } from 'react'
import { Root } from './styled'

type TabGroupPageProps = {
  className?: string
}

export const TabGroupPage: FC<TabGroupPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header />
      <TabBar />
    </Root>
  )
}
