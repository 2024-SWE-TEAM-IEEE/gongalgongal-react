import { Button, Typography } from 'antd'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT } from 'constants/layout'
import styled from 'styled-components'

export const Root = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  padding-bottom: ${TAB_BAR_HEIGHT}px;
`

export const FilterContainer = styled.div`
  width: calc(100% - 40px);
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 20px;
`

export const FilterChipContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const FilterChip = styled.div`
  background: #eee;
  padding: 4px 12px;
  box-sizing: border-box;
  border-radius: 12px;
`

export const FilterChipTypo = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`

export const FilterChipButton = styled(Button)``
