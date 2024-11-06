import { Header } from 'components/Header'
import { TabBar } from 'components/TabBar'
import { FC, useState } from 'react'
import {
  ContentButton,
  ContentButtonContainer,
  ContentContainer,
  ContentSectionContainer,
  ContentSectionContentInput,
  ContentSectionContentTextArea,
  ContentSectionItemContainer,
  ContentSectionSiteContainer,
  ContentSectionSiteDelete,
  ContentSectionSiteTypo,
  ContentSectionSiteWrapper,
  ContentSectionTitleTypo,
  ContentTitleTypo,
  Root,
} from './styled'

type TabGroupCreatePageProps = {
  className?: string
}

export const TabGroupCreatePage: FC<TabGroupCreatePageProps> = ({ className }) => {
  const [name, setName] = useState<string>('동국 컴퓨터정보통신/AI/IT융합 분야 장학 및 대외활동')
  const [description, setDescription] = useState<string>(
    '동국대학교 컴퓨터공학과, AI융합학부, 또는 관련 전공 및 복수전공을 희망하는 분들을 위한 공지 그룹입니다. 각 학부의 공지를 자동으로 수집해 매일 중요한 정보만 선별하여 제공해드립니다.'
  )
  const [url, setUrl] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  return (
    <Root className={className}>
      <Header type={'SUB'} title={'공지 그룹 생성'} />
      <ContentContainer>
        <ContentTitleTypo>기본 정보</ContentTitleTypo>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 그룹 명</ContentSectionTitleTypo>
          <ContentSectionContentInput
            placeholder={'공지 그룹 명을 입력해주세요.'}
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 그룹 상세 설명</ContentSectionTitleTypo>
          <ContentSectionContentTextArea
            placeholder={'공지 그룹 상세 설명을 입력해주세요.'}
            value={description}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={(e: any) => setDescription(e.target.value)}
          />
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>크롤링 출처 사이트</ContentSectionTitleTypo>
          <ContentSectionSiteContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>https://www.dongguk.edu/article/JANGHAKNOTICE/list</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>https://ai.dongguk.edu/main</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>https://cs.dongguk.edu/main</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo> https://dice.dongguk.edu/board/list.do</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
          </ContentSectionSiteContainer>
          <ContentSectionContentInput
            placeholder={'크롤링할 사이트 url을 입력해주세요.'}
            value={url}
            onChange={(e: any) => setUrl(e.target.value)}
          />
          <ContentButton color={'primary'} variant={'outlined'}>
            크롤링 출처 사이트 추가
          </ContentButton>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>카테고리</ContentSectionTitleTypo>
          <ContentSectionSiteContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>장학금</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>시간표 변경</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>시험 일정</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
            <ContentSectionItemContainer>
              <ContentSectionSiteWrapper>
                <ContentSectionSiteTypo>취업 정보</ContentSectionSiteTypo>
              </ContentSectionSiteWrapper>
              <ContentSectionSiteDelete />
            </ContentSectionItemContainer>
          </ContentSectionSiteContainer>
          <ContentSectionContentInput
            placeholder={'카테고리를 입력해주세요.'}
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
          />
          <ContentButton color={'primary'} variant={'outlined'}>
            카테고리 추가
          </ContentButton>
        </ContentSectionContainer>
      </ContentContainer>
      <ContentButtonContainer>
        <ContentButton type={'primary'} size={'large'}>
          공지 그룹 생성
        </ContentButton>
      </ContentButtonContainer>
      <TabBar />
    </Root>
  )
}
