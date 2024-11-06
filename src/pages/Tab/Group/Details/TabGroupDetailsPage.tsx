import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { FC } from 'react'
import { Root } from './styled'

type TabGroupDetailsPageProps = {
  className?: string
}

export const TabGroupDetailsPage: FC<TabGroupDetailsPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header type={'SUB'} title={'공지 그룹 상세'} />
      <TabBar />
    </Root>
  )
}
