import { Header } from 'components/Header'
import { FC } from 'react'
import { TabBar } from '../components/TabBar'
import { FilterChip, FilterChipButton, FilterChipContainer, FilterChipTypo, FilterContainer, Root } from './styled'

type TabHomePageProps = {
  className?: string
}

export const TabHomePage: FC<TabHomePageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header />
      <FilterContainer>
        <FilterChipContainer>
          <FilterChip>
            <FilterChipTypo>전공 관련 공지</FilterChipTypo>
          </FilterChip>
          <FilterChip>
            <FilterChipTypo>장학금 공지</FilterChipTypo>
          </FilterChip>
        </FilterChipContainer>
        <FilterChipButton>필터 수정</FilterChipButton>
      </FilterContainer>
      <TabBar />
    </Root>
  )
}
