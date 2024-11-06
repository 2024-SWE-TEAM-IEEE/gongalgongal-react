import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { INTEREST_TAG_LIST } from 'constants/tag'
import { FC } from 'react'
import {
  ContentButton,
  ContentContainer,
  ContentInput,
  ContentInputContainer,
  ContentInputTypo,
  ContentSelect,
  ContentTitleTypo,
  Root,
} from './styled'

type TabUserInfoPageProps = {
  className?: string
}

export const TabUserInfoPage: FC<TabUserInfoPageProps> = ({ className }) => {
  const onChangeTagList = (value: string) => {
    console.log(`selected ${value}`)
  }

  return (
    <Root className={className}>
      <Header />
      <ContentTitleTypo>프로필 정보</ContentTitleTypo>
      <ContentContainer>
        <ContentInputContainer>
          <ContentInputTypo>이름</ContentInputTypo>
          <ContentInput placeholder="이름을 입력해주세요." />
        </ContentInputContainer>
        <ContentInputContainer>
          <ContentInputTypo>이메일</ContentInputTypo>
          <ContentInput value={'example@gmail.com'} disabled />
        </ContentInputContainer>
        <ContentInputContainer>
          <ContentInputTypo>비밀번호</ContentInputTypo>
          <ContentInput placeholder="비밀번호를 입력해주세요." />
        </ContentInputContainer>
        <ContentInputContainer>
          <ContentInputTypo>비밀번호 확인</ContentInputTypo>
          <ContentInput placeholder="비밀번호 확인을 입력해주세요." />
        </ContentInputContainer>
        <ContentInputContainer>
          <ContentInputTypo>관심사</ContentInputTypo>
          <ContentSelect
            mode="tags"
            style={{ width: '100%' }}
            placeholder="관심이 있는 태그를 선택해주세요."
            onChange={onChangeTagList as any}
            options={INTEREST_TAG_LIST as any}
          />
        </ContentInputContainer>
        <ContentButton type={'primary'} size={'large'}>
          수정
        </ContentButton>
      </ContentContainer>
      <TabBar />
    </Root>
  )
}
