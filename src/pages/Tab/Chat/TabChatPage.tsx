import { GroupCard } from 'components/GroupCard'
import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { FC } from 'react'
import { ChatRoomCardContainer, FilterContainer, Root } from './styled'

type TabChatPageProps = {
  className?: string
}

export const TabChatPage: FC<TabChatPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header />
      <FilterContainer>채팅방 검색</FilterContainer>
      <ChatRoomCardContainer>
        <GroupCard title={'학사 공지'} description={'2024학년도 1학기 장학금 신청 안내'} memberCount={1200} />
        <GroupCard title={'장학금 정보'} description={'겨울방학 단기 해외연수 프로그램 모집'} memberCount={100} />
        <GroupCard title={'취업 정보'} description={'2023년도 학술제 개최 안내'} memberCount={24} />
        <GroupCard title={'학사 공지'} description={'2024학년도 1학기 장학금 신청 안내'} memberCount={1200} />
        <GroupCard title={'장학금 정보'} description={'겨울방학 단기 해외연수 프로그램 모집'} memberCount={100} />
        <GroupCard title={'취업 정보'} description={'2023년도 학술제 개최 안내'} memberCount={24} />
      </ChatRoomCardContainer>
      <TabBar />
    </Root>
  )
}
