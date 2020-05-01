import React from 'react'

import Center from '@components/Center'
import Image from '@components/Image'
import Socials from '@components/Socials'

import {
  Container,
  Logo,
  Details,
  Address,
  Email,
  Phones,
  Phone,
} from './styles'

const Header = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Image src='logo.png' alt='Brasil contra o Vírus' />
        </Logo>

        <Details>
          <Address>
            Av Pres. Castelo Branco, 6061 <br />
            São Paulo, SP
          </Address>
          <Email href='mailto:brcontraovirus@gmail.com'>
            brcontraovirus@gmail.com
          </Email>
          <Phones>
            <Phone>+55 12 98120 7722</Phone>
            <Phone>+55 11 99136 2636</Phone>
            <Phone>+55 11 97281 1999</Phone>
          </Phones>
          <Socials />
        </Details>
      </Center>
    </Container>
  )
}

export default Header
