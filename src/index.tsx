import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { MOBILE_CONTAINER_MAX_WIDTH, MOBILE_CONTAINER_MIN_WIDTH } from 'constants/layout'
import { MainPage } from 'pages/Main'
import { TabChatPage } from 'pages/Tab/Chat'
import { TabGroupPage } from 'pages/Tab/Group'
import { TabGroupDetailsPage } from 'pages/Tab/Group/Details'
import { TabHomePage } from 'pages/Tab/Home'
import { TabUserInfoPage } from 'pages/Tab/UserInfo'
import { UserJoinPage } from 'pages/User/Join'
import { UserLoginPage } from 'pages/User/Login'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as any)

const theme = {
  token: {
    fontFamily: 'Pretendard',
  },
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentContainer = styled.div`
  max-width: ${MOBILE_CONTAINER_MAX_WIDTH}px;
  width: 100%;
  min-width: ${MOBILE_CONTAINER_MIN_WIDTH}px;
  min-height: 100vh;
  background: #fff;
`

root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <ContentContainer>
            <Routes>
              <Route path="/" element={<MainPage />} />

              <Route path="/user/login" element={<UserLoginPage />} />
              <Route path="/user/join" element={<UserJoinPage />} />

              <Route path="/tab/home" element={<TabHomePage />} />
              <Route path="/tab/group" element={<TabGroupPage />} />
              <Route path="/tab/group/details/:id" element={<TabGroupDetailsPage />} />
              <Route path="/tab/chat" element={<TabChatPage />} />
              <Route path="/tab/user-info" element={<TabUserInfoPage />} />
            </Routes>
          </ContentContainer>
        </Container>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
