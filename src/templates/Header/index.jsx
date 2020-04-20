import React, { useState } from 'react'

import Center from '@components/Center'
import Image from '@components/Image'
import MenuHamburger from '@components/MenuHamburger'
import Menu from '@components/Menu'

import { Container, Logo } from './styles'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container open={open}>
      <Center>
        <Logo>
          <Image src='logo.png' alt='Brasil contra o Vírus' />
        </Logo>

        <MenuHamburger toogleOpen={setOpen} open={open} />

        <Menu open={open} />
      </Center>
    </Container>
  )
}

export default Header
