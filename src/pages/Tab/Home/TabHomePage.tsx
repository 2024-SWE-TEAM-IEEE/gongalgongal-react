import { getNotices } from 'apis/getNotices'
import { Header } from 'components/Header'
import { NoticeCard } from 'components/NoticeCard'
import { TabBar } from 'components/TabBar'
import { FC, useEffect, useState } from 'react'
import { NoticeListType } from 'types/common'
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
  const [noticeList, setNoticeList] = useState<NoticeListType>([])

  useEffect(() => {
    getNotices().then((res) => {
      if (res) {
        setNoticeList(res.data.notices)
      }
    })
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
        {noticeList &&
          noticeList.map((noticeItem) => <NoticeCard noticeItem={noticeItem} key={`notice_item_${noticeItem.id}`} />)}
      </NoticeCardContainer>
      <TabBar />
    </Root>
  )
}
