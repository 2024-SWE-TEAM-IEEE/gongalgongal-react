import { message } from 'antd'
import { getCategories } from 'apis/getCategories'
import { postUserJoin } from 'apis/postUserJoin'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BannerContainer,
  BannerSubTitleTypo,
  BannerTitleTypo,
  ContentSelect,
  FooterContainer,
  FooterLink,
  InputField,
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
  const { removeItem: removeAccessToken } = useLocalStorage('access_token')
  const [categoryList, setCategoryList] = useState<any[]>([])
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [selectedCategoryList, setSelectedCategoryList] = useState<any[]>([])
  const navigate = useNavigate()

  const onChangeSelectedCategoryList = (value: any) => {
    setSelectedCategoryList(value)
  }

  const onSubmit = () => {
    if (name === '') {
      message.error('이름을 입력해주세요.')
      return
    }
    if (email === '') {
      message.error('이메일을 입력해주세요.')
      return
    }
    if (password === '') {
      message.error('비밀번호를 입력해주세요.')
      return
    }
    if (password !== passwordConfirm) {
      message.error('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
      return
    }
    if (selectedCategoryList.length === 0) {
      message.error('관심사를 선택해주세요.')
      return
    }

    postUserJoin({ email, name, password, selected_category_ids: selectedCategoryList }).then((res) => {
      if (res) {
        if (res.status.type === 'success') {
          alert('회원가입이 성공적으로 이루어졌습니다.')
          navigate('/user/Login')
        } else {
          alert(res.status.message)
        }
      }
    })
  }

  useEffect(() => {
    getCategories().then((res) => {
      setCategoryList(res.data.categories.map((value: any) => ({ value: value.id, label: value.name })))
    })
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
            <InputField placeholder="이름" value={name} onChange={(e: any) => setName(e.target.value)} />
          </StyledFormItem>
          <StyledFormItem label="이메일 주소" rules={[{ required: true, message: '이메일 주소를 입력해주세요' }]}>
            <InputField placeholder="이메일 주소" value={email} onChange={(e: any) => setEmail(e.target.value)} />
          </StyledFormItem>
          <StyledFormItem label="비밀번호" rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
            <InputField
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </StyledFormItem>
          <StyledFormItem label="비밀번호 확인" rules={[{ required: true, message: '비밀번호를 확인해주세요' }]}>
            <InputField
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={(e: any) => setPasswordConfirm(e.target.value)}
            />
          </StyledFormItem>

          <StyledFormItem label="관심사 선택">
            <ContentSelect
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="관심사 선택"
              onChange={onChangeSelectedCategoryList}
              options={categoryList}
            />
          </StyledFormItem>
          <RegisterButton size={'middle'} type={'primary'} onClick={onSubmit}>
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
