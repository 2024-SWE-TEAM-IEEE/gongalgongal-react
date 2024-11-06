import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { Header } from 'components/Header'
import { NoticeCard } from 'components/NoticeCard'
import { FC } from 'react'
import {
  ContentButton,
  ContentButtonContainer,
  ContentContainer,
  ContentNoticeCardContainer,
  ContentSectionCategoryChip,
  ContentSectionCategoryChipContainer,
  ContentSectionCategoryChipTypo,
  ContentSectionContainer,
  ContentSectionContentContainer,
  ContentSectionContentTypo,
  ContentSectionSiteContainer,
  ContentSectionSiteTypo,
  ContentSectionSiteWrapper,
  ContentSectionTitleTypo,
  ContentTitleTypo,
  Root,
} from './styled'

type TabGroupDetailsPageProps = {
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

const categories = [
  '장학금',
  '시간표 변경',
  '시험 일정',
  '대학원 진학',
  '취업 정보',
  '교환학생',
  '동아리',
  '인턴십',
  '자격증',
  '교내 행사',
  '특강',
  '학술제',
  '학부 회의',
  '휴학/복학',
  '졸업',
  '공모전',
  '학생 복지',
  '교과 과정',
  '멘토링',
  '학과 규정',
]

export const TabGroupDetailsPage: FC<TabGroupDetailsPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header type={'SUB'} title={'공지 그룹 상세'} />
      <ContentContainer>
        <ContentTitleTypo>기본 정보</ContentTitleTypo>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 그룹 명</ContentSectionTitleTypo>
          <ContentSectionContentTypo>동국 컴퓨터정보통신/AI/IT융합 분야 장학 및 대외활동</ContentSectionContentTypo>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>공지 그룹 상세 설명</ContentSectionTitleTypo>
          <ContentSectionContentTypo>
            동국대학교 컴퓨터공학과, AI융합학부, 또는 관련 전공 및 복수전공을 희망하는 분들을 위한 공지 그룹입니다. 각
            학부의 공지를 자동으로 수집해 매일 중요한 정보만 선별하여 제공해드립니다.
          </ContentSectionContentTypo>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>그룹장</ContentSectionTitleTypo>
          <ContentSectionContentContainer>
            <Avatar size={20} icon={<UserOutlined />} style={{ marginLeft: 2 }} />
            <ContentSectionContentTypo>아마추어그래머</ContentSectionContentTypo>
          </ContentSectionContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>크롤링 출처 사이트</ContentSectionTitleTypo>
          <ContentSectionSiteContainer>
            <ContentSectionSiteWrapper>
              <ContentSectionSiteTypo>https://www.dongguk.edu/article/JANGHAKNOTICE/list</ContentSectionSiteTypo>
            </ContentSectionSiteWrapper>
            <ContentSectionSiteWrapper>
              <ContentSectionSiteTypo>https://ai.dongguk.edu/main</ContentSectionSiteTypo>
            </ContentSectionSiteWrapper>
            <ContentSectionSiteWrapper>
              <ContentSectionSiteTypo>https://cs.dongguk.edu/main</ContentSectionSiteTypo>
            </ContentSectionSiteWrapper>
            <ContentSectionSiteWrapper>
              <ContentSectionSiteTypo> https://dice.dongguk.edu/board/list.do</ContentSectionSiteTypo>
            </ContentSectionSiteWrapper>
          </ContentSectionSiteContainer>
        </ContentSectionContainer>
        <ContentSectionContainer>
          <ContentSectionTitleTypo>카테고리</ContentSectionTitleTypo>
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
        </ContentSectionContainer>
      </ContentContainer>
      <ContentContainer>
        <ContentTitleTypo>공지 정보</ContentTitleTypo>
        <ContentNoticeCardContainer>
          <NoticeCard
            title="2024학년도 1학기 장학금 신청 안내"
            author="학생지원과"
            description="2024학년도 1학기 장학금 신청 기간이 다음과 같이 진행됩니다. 신청 기간을 놓치지 않도록 주의해주세요."
            date="2023-11-15"
            iconType="DOLLAR"
          />
          <NoticeCard
            title="겨울방학 단기 해외연수 프로그램 모집"
            author="국제교류처"
            description="겨울방학 기간 동안 진행되는 단기 해외연수 프로그램 참가자를 모집합니다. 관심 있는 학생들의 많은 지원 바랍니다."
            date="2023-11-14"
            iconType="BOOK"
          />
          <NoticeCard
            title="2023년도 학술제 개최 안내"
            author="학술정보원"
            description="2023년도 학술제가 다음 달 개최됩니다. 이번 학술제의 주제는 '미래 기술과 인류의 공존'입니다."
            date="2023-11-13"
            iconType="AWARD"
          />
        </ContentNoticeCardContainer>
      </ContentContainer>
      <ContentButtonContainer>
        <ContentButton type={'primary'} size={'large'}>
          그룹 가입하기
        </ContentButton>
      </ContentButtonContainer>
    </Root>
  )
}
