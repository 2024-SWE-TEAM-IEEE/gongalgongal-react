import { Header } from 'components/Header'
import { FC } from 'react'
import { Root } from './styled'

type NoticeDetailsPageProps = {
  className?: string
}

export const NoticeDetailsPage: FC<NoticeDetailsPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header title="공지 상세" type="SUB" />
    </Root>
  )
}
