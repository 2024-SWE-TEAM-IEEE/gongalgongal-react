import { FC } from 'react'
import { Root } from './styled'

type TabHomePageProps = {
  className?: string
}

export const TabHomePage: FC<TabHomePageProps> = ({ className }) => {
  return <Root className={className}>TabHomePage</Root>
}
