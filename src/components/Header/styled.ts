import { BellOutlined, SettingOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { PRIMARY_COLOR } from 'constants/color'
import { MOBILE_CONTAINER_MAX_WIDTH, MOBILE_CONTAINER_MIN_WIDTH } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  max-width: ${MOBILE_CONTAINER_MAX_WIDTH}px;
  width: 100%;
  min-width: ${MOBILE_CONTAINER_MIN_WIDTH}px;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  border-bottom: 1px #d9d9d9 solid;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
`

export const LogoTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: ${PRIMARY_COLOR};
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