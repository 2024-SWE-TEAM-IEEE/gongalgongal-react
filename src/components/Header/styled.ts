import { BellOutlined, SettingOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  border-bottom: 1px #d9d9d9 solid;
`

export const LogoTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: #1677ff;
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`

export const MenuButtonBell = styled(BellOutlined)`
  font-size: 20px;
`

export const MenuButtonSetting = styled(SettingOutlined)`
  font-size: 20px;
`
