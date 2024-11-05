import { FC } from 'react'
import { Root } from './styled'

type UserJoinPageProps = {
  className?: string
}

export const UserJoinPage: FC<UserJoinPageProps> = ({ className }) => {
  return <Root className={className}>UserJoinPage</Root>
}
