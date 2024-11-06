import { Header } from 'components/Header'
import { FC } from 'react'
import { TabBar } from '../components/TabBar'
import { Root } from './styled'

type TabHomePageProps = {
  className?: string
}

export const TabHomePage: FC<TabHomePageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header />
      <TabBar />
    </Root>
  )
}
