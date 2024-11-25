import { getCategories } from 'apis/getCategories'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BannerContainer,
  BannerSubTitleTypo,
  BannerTitleTypo,
  FooterContainer,
  FooterLink,
  InputField,
  InterestSelect,
  RegisterButton,
  RegisterContainer,
  Root,
  StyledForm,
  StyledFormItem,
} from './styled'

type UserJoinPageProps = {
  className?: string
}

export const UserJoinPage: FC<UserJoinPageProps> = ({ className }) => {
  const navigate = useNavigate()

  const onClickRegisterButton = () => {
    console.log('회원가입 버튼 클릭')
    navigate('/user/Login')
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Root className={className}>
      <BannerContainer>
        <BannerTitleTypo>공알공알</BannerTitleTypo>
        <BannerSubTitleTypo>
          맞춤형 실시간 알림 서비스로, <br />
          중요한 공지를 한 눈에 확인하세요!
        </BannerSubTitleTypo>
      </BannerContainer>
      <RegisterContainer>
        <StyledForm layout="vertical">
          <StyledFormItem label="이름" rules={[{ required: true, message: '이름을 입력해주세요' }]}>
            <InputField placeholder="이름" />
          </StyledFormItem>
          <StyledFormItem label="이메일 주소" rules={[{ required: true, message: '이메일 주소를 입력해주세요' }]}>
            <InputField placeholder="이메일 주소" />
          </StyledFormItem>
          <StyledFormItem label="비밀번호" rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
            <InputField type="password" placeholder="비밀번호" />
          </StyledFormItem>
          <StyledFormItem label="비밀번호 확인" rules={[{ required: true, message: '비밀번호를 확인해주세요' }]}>
            <InputField type="password" placeholder="비밀번호 확인" />
          </StyledFormItem>

          <StyledFormItem label="관심사 선택">
            <InterestSelect>
              <option value="">관심사 선택</option>
              <option value="sports">스포츠</option>
              <option value="music">음악</option>
              <option value="art">예술</option>
            </InterestSelect>
          </StyledFormItem>
          <RegisterButton size={'middle'} type={'primary'} onClick={onClickRegisterButton}>
            회원가입
          </RegisterButton>
        </StyledForm>
      </RegisterContainer>

      <FooterContainer>
        <p>
          <FooterLink href="/terms-of-service">이용약관</FooterLink>{' '}
          <FooterLink href="/privacy-policy">개인정보처리방침</FooterLink>
        </p>
      </FooterContainer>
    </Root>
  )
}
