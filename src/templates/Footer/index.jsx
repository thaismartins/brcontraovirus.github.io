import React from 'react'

import Content from '@components/Content'
import Image from '@components/Image'

import { Container, Logo } from './styles'

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Image src='logo.png' alt='Brasil contra o Vírus' />
        </Logo>
      </Content>
    </Container>
  )
}

export default Header
