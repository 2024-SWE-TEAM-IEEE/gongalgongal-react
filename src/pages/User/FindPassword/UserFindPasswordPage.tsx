import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Root,
  BannerContainer,
  BannerTitleTypo,
  BannerSubTitleTypo,
  FindTitleTypo,
  StyledForm,
  StyledFormItem,
  FindContainer,
  SendNumButton,
  ConfirmButton,
  FooterContainer,
  FooterLink,
  InputField
} from './styled';

type UserFindPasswordPageProps = {
  className?: string
}

export const UserFindPasswordPage: FC<UserFindPasswordPageProps> = ({ className }) => {
  const navigate = useNavigate();

  const onClickSendCode = () => {
    console.log('인증번호 보내기 버튼 클릭');
    // 인증번호 보내기 내용 추가
  }

  const onClickConfirmButton = () => {
    console.log('확인 버튼 클릭');
    navigate('/user/Login'); // 필요에 따라 경로 조정
  }

  return (
    <Root className={className}>
      <BannerContainer>
        <BannerTitleTypo>공알공알</BannerTitleTypo>
        <BannerSubTitleTypo>
          맞춤형 실시간 알림 서비스로, <br />
          중요한 공지를 한 눈에 확인하세요!
        </BannerSubTitleTypo>
      </BannerContainer>
      
      <StyledForm layout="vertical">
        <FindContainer>
          <FindTitleTypo>비밀번호 찾기</FindTitleTypo>
          <StyledFormItem
            name="name"
            label="이름"
            rules={[{ required: false, message: '이름을 입력해주세요' }]}
          >
            <InputField placeholder="이름" />
          </StyledFormItem>

          <StyledFormItem
            name="email"
            label="이메일 주소"
            rules={[{ required: false, message: '이메일 주소를 입력해주세요' }]}
          >
            <InputField placeholder="이메일 주소" />
            <SendNumButton type="primary" onClick={onClickSendCode}>
              인증번호 보내기
            </SendNumButton>
          </StyledFormItem>

          <StyledFormItem
            name="verificationCode"
            label="인증번호 입력"
            rules={[{ required: false, message: '인증번호를 입력해주세요' }]}
          >
            <InputField placeholder="인증번호" />
          </StyledFormItem>

          <StyledFormItem>
            <ConfirmButton type="primary" htmlType="submit" onClick={onClickConfirmButton}>
              확인
            </ConfirmButton>
          </StyledFormItem>
        </FindContainer>
      </StyledForm>

      <FooterContainer>
        <p>
          <FooterLink href="/terms-of-service">
            이용약관
          </FooterLink>
          {' '}
          <FooterLink href="/privacy-policy">
            개인정보처리방침
          </FooterLink>
        </p>
      </FooterContainer>
    </Root>
  )
}
