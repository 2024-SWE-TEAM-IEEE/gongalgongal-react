import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoticeCardIconType } from 'types/common'
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
  id: number
  title: string
  author: string
  date: string
  description: string
  iconType: NoticeCardIconType
}

export const NoticeCard: FC<NoticeCardProps> = ({ className, id, iconType, title, author, date, description }) => {
  const navigate = useNavigate()

  const onClickDetailsButton = () => {
    navigate(`/notice/details/${id}`)
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
          <ContentInfoTitleTypo>{title}</ContentInfoTitleTypo>
          <ContentInfoCaptionTypo>
            {author} • {date}
          </ContentInfoCaptionTypo>
          <ContentInfoContentTypo>{description}</ContentInfoContentTypo>
        </ContentInfoContainer>
      </ContentContainer>
      <ContentDivider />
      <FooterContainer>
        <FooterDetailsButton type={'text'} size={'small'} onClick={onClickDetailsButton}>
          자세히 보기
        </FooterDetailsButton>
        <FooterButtonContainer>
          <FooterButton>보관</FooterButton>
          <FooterButton>중요</FooterButton>
        </FooterButtonContainer>
      </FooterContainer>
    </Root>
  )
}
