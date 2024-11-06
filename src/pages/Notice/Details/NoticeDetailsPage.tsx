import { FC } from 'react'
import { Root } from './styled'

type NoticeDetailsPageProps = {
  className?: string
}

export const NoticeDetailsPage: FC<NoticeDetailsPageProps> = ({ className }) => {
  return <Root className={className}>NoticeDetailsPage</Root>
}
