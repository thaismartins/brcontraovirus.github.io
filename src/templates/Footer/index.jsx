import React from 'react'

import Center from '@components/Center'
import Image from '@components/Image'

import { Container, Logo } from './styles'

const Header = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Image src='logo.png' alt='Brasil contra o Vírus' />
        </Logo>
      </Center>
    </Container>
  )
}

export default Header
