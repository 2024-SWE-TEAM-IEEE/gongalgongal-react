import { Header } from 'components/Header'
import { FC } from 'react'
import {
  ContentButton,
  ContentButtonCaptionTypo,
  ContentButtonContainer,
  ContentContainer,
  ContentSectionCaptionTypo,
  ContentSectionCategoryChip,
  ContentSectionCategoryChipContainer,
  ContentSectionCategoryChipTypo,
  ContentSectionContainer,
  ContentSectionContentContainer,
  ContentSectionContentTypo,
  ContentSectionTitleTypo,
  ContentTitleTypo,
  Root,
} from './styled'

type NoticeDetailsPageProps = {
  className?: string
}

const pastelColorPairs = [
  { background: '#FFB3BA55', text: '#5A5A5Abb' }, // Light Pink background with dark gray text
  { background: '#FFDFBA55', text: '#4A4A4Abb' }, // Peach background with dark gray text
  { background: '#FFFFBA55', text: '#3A3A3Abb' }, // Light Yellow background with dark gray text
  { background: '#BAFFC955', text: '#3A3A3Abb' }, // Light Mint background with dark gray text
  { background: '#BAE1FF55', text: '#3A3A3Abb' }, // Light Sky Blue background with dark gray text
  { background: '#D2BAFF55', text: '#3A3A3Abb' }, // Lavender background with dark gray text
  { background: '#FFBAFA55', text: '#4A4A4Abb' }, // Light Rose background with dark gray text
  { background: '#FFEFB655', text: '#4A4A4Abb' }, // Light Cream background with dark gray text
  { background: '#BAFFF755', text: '#3A3A3Abb' }, // Pale Aqua background with dark gray text
  { background: '#E6E6FA55', text: '#3A3A3Abb' }, // Very Light Lavender background with dark gray text
]

const categories = ['장학금', '시간표 변경', '시험 일정', '대학원 진학', '취업 정보', '교환학생']

export const NoticeDetailsPage: FC<NoticeDetailsPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header title="공지 상세" type="SUB" />
      <ContentContainer>
        <ContentTitleTypo>공지 상세 정보</ContentTitleTypo>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 제목</ContentSectionTitleTypo>
          <ContentSectionContentContainer>
            <ContentSectionContentTypo>장학금 신청 마감 안내</ContentSectionContentTypo>
          </ContentSectionContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 내용</ContentSectionTitleTypo>
          <ContentSectionContentContainer>
            <ContentSectionContentTypo>
              동국대학교 컴퓨터공학과, AI융합학부, 또는 관련 전공 및 복수전공을 희망하는 분들을 위한 공지 그룹입니다. 각
              학부의 공지를 자동으로 수집해 매일 중요한 정보만 선별하여 제공해드립니다.
            </ContentSectionContentTypo>
          </ContentSectionContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 날짜</ContentSectionTitleTypo>
          <ContentSectionContentContainer>
            <ContentSectionCaptionTypo>2024.11.05</ContentSectionCaptionTypo>
          </ContentSectionContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 링크</ContentSectionTitleTypo>
          <ContentSectionContentContainer>
            <a
              href={'https://www.dongguk.edu/article/GENERALNOTICES/detail/26757910'}
              target={'_blank'}
              rel="noreferrer"
            >
              <ContentSectionCaptionTypo>
                https://www.dongguk.edu/article/GENERALNOTICES/detail/26757910
              </ContentSectionCaptionTypo>
            </a>
          </ContentSectionContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>카테고리</ContentSectionTitleTypo>
          <ContentSectionContentContainer>
            <ContentSectionCategoryChipContainer>
              {categories.map((categoryItem, index) => (
                <ContentSectionCategoryChip
                  style={{
                    backgroundColor: pastelColorPairs[index % 10].background,
                  }}
                  key={`category_item_${index}`}
                >
                  <ContentSectionCategoryChipTypo
                    style={{
                      color: pastelColorPairs[index % 10].text,
                    }}
                  >
                    {categoryItem}
                  </ContentSectionCategoryChipTypo>
                </ContentSectionCategoryChip>
              ))}
            </ContentSectionCategoryChipContainer>
          </ContentSectionContentContainer>
        </ContentSectionContainer>
      </ContentContainer>
      <ContentButtonContainer>
        <ContentButton type={'primary'} size={'large'}>
          대화방 참여
        </ContentButton>
        <ContentButtonCaptionTypo>공지에 대한 정보를 공유하는 대화방입니다!</ContentButtonCaptionTypo>
      </ContentButtonContainer>
    </Root>
  )
}
