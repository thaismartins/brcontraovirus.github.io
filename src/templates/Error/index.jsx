import React from 'react'

import Center from '@components/Center'
import Image from '@components/Image'

import { Container, Title, Description, ImageWrapper } from './styles'

const Error = () => {
  return (
    <Container>
      <Center>
        <ImageWrapper>
          <Image src='404.svg' alt='Página não encontrada' />
        </ImageWrapper>

        <Title>Oops...</Title>
        <Description>
          Não conseguimos encontrar esta página
          <span role='img' aria-label='triste'>
            &#128528;
          </span>
        </Description>
      </Center>
    </Container>
  )
}

export default Error
