import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { MOBILE_CONTAINER_MAX_WIDTH, MOBILE_CONTAINER_MIN_WIDTH } from 'constants/layout'
import { MainPage } from 'pages/Main'
import { TabChatPage } from 'pages/Tab/Chat'
import { TabGroupPage } from 'pages/Tab/Group'
import { TabHomePage } from 'pages/Tab/Home'
import { UserInfoPage } from 'pages/User/Info'
import { UserJoinPage } from 'pages/User/Join'
import { UserLoginPage } from 'pages/User/Login'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as any)

const theme = {
  token: {
    fontFamily: 'Pretendard',
  },
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
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
              <Route path="/user/info" element={<UserInfoPage />} />

              <Route path="/tab/home" element={<TabHomePage />} />
              <Route path="/tab/group" element={<TabGroupPage />} />
              <Route path="/tab/chat" element={<TabChatPage />} />
            </Routes>
          </ContentContainer>
        </Container>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
