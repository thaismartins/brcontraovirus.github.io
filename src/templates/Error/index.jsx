import React from 'react'

import Content from '@components/Content'
import Image from '@components/Image'

import { Container, Title, Description, ImageWrapper } from './styles'

const Error = () => {
  return (
    <Container>
      <Content>
        <ImageWrapper>
          <Image src='404.svg' alt='Página não encontrada' />
        </ImageWrapper>

        <Title>Oops...</Title>
        <Description>
          Não conseguimos encontrar esta página &#128528;
        </Description>
      </Content>
    </Container>
  )
}

export default Error
