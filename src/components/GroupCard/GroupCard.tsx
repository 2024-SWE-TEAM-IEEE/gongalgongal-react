import { FC } from 'react'
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
  return (
    <Root className={className}>
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
