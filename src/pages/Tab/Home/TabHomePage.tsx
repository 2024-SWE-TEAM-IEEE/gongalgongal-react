import { getNotices } from 'apis/getNotices'
import { Header } from 'components/Header'
import { NoticeCard } from 'components/NoticeCard'
import { TabBar } from 'components/TabBar'
import { FC, useEffect } from 'react'
import {
  FilterChip,
  FilterChipButton,
  FilterChipContainer,
  FilterChipTypo,
  FilterContainer,
  NoticeCardContainer,
  Root,
} from './styled'

type TabHomePageProps = {
  className?: string
}

export const TabHomePage: FC<TabHomePageProps> = ({ className }) => {
  useEffect(() => {
    getNotices()
  }, [])

  return (
    <Root className={className}>
      <Header />
      <FilterContainer>
        <FilterChipContainer>
          <FilterChip>
            <FilterChipTypo>전공 관련 공지</FilterChipTypo>
          </FilterChip>
          <FilterChip>
            <FilterChipTypo>장학금 공지</FilterChipTypo>
          </FilterChip>
        </FilterChipContainer>
        <FilterChipButton>필터 수정</FilterChipButton>
      </FilterContainer>
      <NoticeCardContainer>
        <NoticeCard
          title="2024학년도 1학기 장학금 신청 안내"
          author="학생지원과"
          description="2024학년도 1학기 장학금 신청 기간이 다음과 같이 진행됩니다. 신청 기간을 놓치지 않도록 주의해주세요."
          date="2023-11-15"
          iconType="DOLLAR"
        />
        <NoticeCard
          title="겨울방학 단기 해외연수 프로그램 모집"
          author="국제교류처"
          description="겨울방학 기간 동안 진행되는 단기 해외연수 프로그램 참가자를 모집합니다. 관심 있는 학생들의 많은 지원 바랍니다."
          date="2023-11-14"
          iconType="BOOK"
        />
        <NoticeCard
          title="2023년도 학술제 개최 안내"
          author="학술정보원"
          description="2023년도 학술제가 다음 달 개최됩니다. 이번 학술제의 주제는 '미래 기술과 인류의 공존'입니다."
          date="2023-11-13"
          iconType="AWARD"
        />
      </NoticeCardContainer>
      <TabBar />
    </Root>
  )
}
