import React from 'react'

import Content from '@components/Content'
import Background from '@components/Background'
import Button from '@components/Button'

import { Container } from './styles'

const BannerHome = () => {
  return (
    <Container>
      <Background image='banner.jpg' alt='Brasil contra o Vírus' full>
        <Content>
          <h1>Brasil contra o Virus</h1>
          <h2>Rede colaborativa de combate ao COVID-19 no Brasil</h2>
          <Button color='white-green' rounded to='/'>
            Faça Parte
          </Button>
          <Button color='white-green' rounded to='/'>
            Vaquinha
          </Button>
        </Content>
      </Background>
    </Container>
  )
}

export default BannerHome
