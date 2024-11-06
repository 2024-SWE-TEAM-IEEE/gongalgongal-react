import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ContentContainer,
  ContentCountTypo,
  ContentTypo,
  HeaderContainer,
  HeaderMenuContainer,
  HeaderMenuIcon,
  HeaderTypo,
  Root,
} from './styled'

type GroupCardProps = {
  className?: string
  title: string
  description: string
  memberCount: number
}

export const GroupCard: FC<GroupCardProps> = ({ className, title, description, memberCount }) => {
  const navigate = useNavigate()

  const onClickDetailsPage = () => {
    navigate('/tab/group/details/1')
  }

  return (
    <Root className={className} onClick={onClickDetailsPage}>
      <HeaderContainer>
        <HeaderTypo>{title}</HeaderTypo>
        <HeaderMenuContainer>
          <HeaderMenuIcon />
        </HeaderMenuContainer>
      </HeaderContainer>
      <ContentContainer>
        <ContentTypo>{description}</ContentTypo>
        <ContentCountTypo>{memberCount.toLocaleString()} 멤버</ContentCountTypo>
      </ContentContainer>
    </Root>
  )
}
