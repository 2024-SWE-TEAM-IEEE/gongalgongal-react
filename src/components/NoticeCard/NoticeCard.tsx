import { deleteNoticeStore } from 'apis/deleteNoticeStore'
import { postNoticeStore } from 'apis/postNoticeStore'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoticeCardIconType, NoticeItemType } from 'types/common'
import { formatDate } from 'utils/formatDate'
import {
  ContentContainer,
  ContentDivider,
  ContentIconAward,
  ContentIconBook,
  ContentIconContainer,
  ContentIconDollar,
  ContentInfoCaptionTypo,
  ContentInfoContainer,
  ContentInfoContentTypo,
  ContentInfoTitleTypo,
  FooterButton,
  FooterButtonContainer,
  FooterContainer,
  FooterDetailsButton,
  Root,
} from './styled'

type NoticeCardProps = {
  className?: string
  noticeItem: NoticeItemType
}

export const NoticeCard: FC<NoticeCardProps> = ({ className, noticeItem }) => {
  const navigate = useNavigate()
  const [stored, setStored] = useState<boolean>(noticeItem.stored)
  const [starred, setStarred] = useState<boolean>(noticeItem.starred)

  const iconType = ((): NoticeCardIconType => {
    if (noticeItem.title.indexOf('장학') !== -1) {
      return 'DOLLAR'
    }
    if (noticeItem.title.indexOf('수상') !== -1) {
      return 'AWARD'
    }
    return 'BOOK'
  })()

  const onClickDetailsButton = () => {
    navigate(`/notice/details/${noticeItem.id}`)
  }

  const onClickStoreButton = () => {
    if (stored) {
      deleteNoticeStore({ id: noticeItem.id })
      setStored(false)
      return
    }
    postNoticeStore({ id: noticeItem.id })
    setStored(true)
  }

  const onClickStarButton = () => {
    if (starred) {
      deleteNoticeStore({ id: noticeItem.id })
      return
    }
    postNoticeStore({ id: noticeItem.id })
  }

  return (
    <Root className={className}>
      <ContentContainer>
        <ContentIconContainer>
          {iconType === 'DOLLAR' && <ContentIconDollar />}
          {iconType === 'BOOK' && <ContentIconBook />}
          {iconType === 'AWARD' && <ContentIconAward />}
        </ContentIconContainer>
        <ContentInfoContainer>
          <ContentInfoTitleTypo>{noticeItem.title}</ContentInfoTitleTypo>
          <ContentInfoCaptionTypo>
            {noticeItem.author} • {formatDate(noticeItem.noticed_date)}
          </ContentInfoCaptionTypo>
          <ContentInfoContentTypo>{noticeItem.content}</ContentInfoContentTypo>
        </ContentInfoContainer>
      </ContentContainer>
      <ContentDivider />
      <FooterContainer>
        <FooterDetailsButton type={'text'} size={'small'} onClick={onClickDetailsButton}>
          자세히 보기
        </FooterDetailsButton>
        <FooterButtonContainer>
          <FooterButton type={stored ? 'primary' : 'default'} onClick={onClickStoreButton}>
            {stored ? '보관 중' : '보관'}
          </FooterButton>
          <FooterButton>중요</FooterButton>
        </FooterButtonContainer>
      </FooterContainer>
    </Root>
  )
}
