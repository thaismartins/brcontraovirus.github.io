import React from 'react'

import Center from '@components/Center'
import Background from '@components/Background'
import Button from '@components/Button'

import { Container, Content, Title, Subtitle, Buttons } from './styles'

const BannerHome = () => {
  return (
    <Container>
      <Background image='banner.jpg' alt='Brasil contra o Vírus' full>
        <Center>
          <Content>
            <Title>Brasil contra o Virus</Title>

            <Subtitle>
              Rede colaborativa de combate ao COVID-19 no Brasil
            </Subtitle>

            <Buttons>
              <Button color='white-green' rounded uppercase to='/'>
                Faça Parte
              </Button>
              <Button color='white-green' rounded uppercase to='/'>
                Vaquinha
              </Button>
            </Buttons>
          </Content>
        </Center>
      </Background>
    </Container>
  )
}

export default BannerHome
