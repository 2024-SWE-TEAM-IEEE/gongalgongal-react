import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { MainPage } from 'pages/Main'
import { UserLoginPage } from 'pages/User/Login'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as any)

const theme = {
  token: {
    fontFamily: 'Pretendard',
  },
}
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user/login" element={<UserLoginPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
