import { getNoticeGroups } from 'apis/getNoticeGroups'
import { GroupCard } from 'components/GroupCard'
import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoticeGroupListType } from 'types/common'
import { ContentButton, ContentButtonContainer, FilterContainer, GroupCardContainer, Root } from './styled'

type TabGroupPageProps = {
  className?: string
}

export const TabGroupPage: FC<TabGroupPageProps> = ({ className }) => {
  const navigate = useNavigate()
  const [noticeGroupList, setNoticeGroupList] = useState<NoticeGroupListType>([])

  const onClickCreateButton = () => {
    navigate('/tab/group/create')
  }

  useEffect(() => {
    getNoticeGroups().then((res) => {
      if (res) {
        setNoticeGroupList(res.data.groups)
      }
    })
  }, [])

  return (
    <Root className={className}>
      <Header />
      <FilterContainer>참가한 공지 그룹</FilterContainer>
      <GroupCardContainer>
        {noticeGroupList.map((noticeGroupItem) => (
          <GroupCard noticeGroupItem={noticeGroupItem} key={`notice_group_item_${noticeGroupItem.id}`} />
        ))}
      </GroupCardContainer>
      <ContentButtonContainer>
        <ContentButton type={'primary'} size={'large'} onClick={onClickCreateButton}>
          공지 그룹 생성
        </ContentButton>
      </ContentButtonContainer>
      <TabBar />
    </Root>
  )
}
