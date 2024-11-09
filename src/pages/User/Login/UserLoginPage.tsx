import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BannerContainer,
  BannerTitleTypo,
  BannerSubTitleTypo,
  StyledForm,
  StyledFormItem,
  Root,
  InputField,
  LoginContainer,
  LoginTitleTypo,
  LoginButton,
  FindPasswordButtonContainer,
  FindPasswordButton,
  JoinButton,
  JoinTypo,
  FooterContainer,
  FooterLink,
  JoinButtonContainer
} from './styled';

type UserLoginPageProps = {
  className?: string;
}

export const UserLoginPage: FC<UserLoginPageProps> = ({ className }) => {
  const navigate = useNavigate();

  const onClickLoginButton = () => {
    navigate('/tab/Home');
  }
  const onClickJoinButton = () => {
    navigate('/user/Join');
  }

  const onClickFindPasswordButton = () => {
    navigate('/user/FindPassword');
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
      <LoginContainer>
        <LoginTitleTypo>로그인</LoginTitleTypo>
        <StyledForm name="login" layout="vertical">
          <StyledFormItem
            name="email"
            label="이메일 주소"
            rules={[{ required: false, message: '이메일 주소를 입력해주세요' }]}
          >
            <InputField placeholder="이메일 주소" />
          </StyledFormItem>
          <StyledFormItem
            name="password"
            label="비밀번호"
            rules={[{ required: false, message: '비밀번호를 입력해주세요' }]}
          >
            <InputField.Password placeholder="비밀번호" />
          </StyledFormItem>
          <StyledFormItem>
            <LoginButton type="primary" onClick={onClickLoginButton}>
              로그인
            </LoginButton>
          </StyledFormItem>
          <FindPasswordButtonContainer>
              <FindPasswordButton type="link" onClick={onClickFindPasswordButton}>
                비밀번호를 잊으셨나요?
              </FindPasswordButton>
            </FindPasswordButtonContainer>
        </StyledForm>
      </LoginContainer>
      <JoinButtonContainer>
        <JoinTypo>계정이 없으신가요?
        <JoinButton type="link" onClick={onClickJoinButton}>
         회원가입
      </JoinButton>
      </JoinTypo>
      </JoinButtonContainer>
      
      
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
