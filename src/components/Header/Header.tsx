import { Button } from 'antd'
import { FC } from 'react'
import { LogoTypo, MenuButtonBell, MenuButtonSetting, MenuContainer, Root } from './styled'

type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
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
