import { FC } from 'react'
import { Root } from './styled'

type TabUserInfoPageProps = {
  className?: string
}

export const TabUserInfoPage: FC<TabUserInfoPageProps> = ({ className }) => {
  return <Root className={className}>TabUserInfoPage</Root>
}
