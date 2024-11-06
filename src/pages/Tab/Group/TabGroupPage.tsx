import { GroupCard } from 'components/GroupCard'
import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { FC } from 'react'
import { ContentButton, ContentButtonContainer, FilterContainer, GroupCardContainer, Root } from './styled'

type TabGroupPageProps = {
  className?: string
}

export const TabGroupPage: FC<TabGroupPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header />
      <FilterContainer>그룹 검색</FilterContainer>
      <GroupCardContainer>
        <GroupCard title={'학사 공지'} description={'2024학년도 1학기 장학금 신청 안내'} memberCount={1200} />
        <GroupCard title={'장학금 정보'} description={'겨울방학 단기 해외연수 프로그램 모집'} memberCount={100} />
        <GroupCard title={'취업 정보'} description={'2023년도 학술제 개최 안내'} memberCount={24} />
        <GroupCard title={'학사 공지'} description={'2024학년도 1학기 장학금 신청 안내'} memberCount={1200} />
        <GroupCard title={'장학금 정보'} description={'겨울방학 단기 해외연수 프로그램 모집'} memberCount={100} />
        <GroupCard title={'취업 정보'} description={'2023년도 학술제 개최 안내'} memberCount={24} />
      </GroupCardContainer>
      <ContentButtonContainer>
        <ContentButton type={'primary'} size={'large'}>
          공지 그룹 생성
        </ContentButton>
      </ContentButtonContainer>
      <TabBar />
    </Root>
  )
}
