import { FC } from 'react'
import { Root } from './styled'

type UserInfoPageProps = {
  className?: string
}

export const UserInfoPage: FC<UserInfoPageProps> = ({ className }) => {
  return <Root className={className}>UserInfoPage</Root>
}
