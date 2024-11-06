import { Button } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogoTypo,
  MenuButtonBack,
  MenuButtonBell,
  MenuButtonSetting,
  MenuButtonSpace,
  MenuContainer,
  Root,
  TitleTypo,
} from './styled'

type HeaderProps = {
  className?: string
  type?: 'ROOT' | 'SUB'
  title?: string
}

export const Header: FC<HeaderProps> = ({ className, type = 'ROOT', title }) => {
  const navigate = useNavigate()

  const onClickBackPage = () => {
    navigate(-1)
  }

  if (type === 'ROOT') {
    return (
      <Root className={className}>
        <LogoTypo>공알공알</LogoTypo>
        <MenuContainer>
          <Button icon={<MenuButtonBell />} shape={'circle'} size={'large'} type={'text'} />
          <Button icon={<MenuButtonSetting />} shape={'circle'} size={'large'} type={'text'} />
        </MenuContainer>
      </Root>
    )
  }
  return (
    <Root className={className}>
      <Button icon={<MenuButtonBack />} shape={'circle'} size={'large'} type={'text'} onClick={onClickBackPage} />
      <TitleTypo>{title}</TitleTypo>
      <MenuButtonSpace />
    </Root>
  )
}
