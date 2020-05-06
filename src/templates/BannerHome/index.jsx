import React from 'react'

import Center from '@components/Center'
import Background from '@components/Background'

import { Container, Content, Title, Subtitle, Buttons, Button } from './styles'

const BannerHome = () => {
  return (
    <Container>
      <Background image='banner.jpg' alt='Brasil contra o Vírus' full>
        <Center>
          <Content>
            <Title>Brasil contra o Vírus</Title>

            <Subtitle>
              Rede colaborativa de combate ao COVID-19 no Brasil
            </Subtitle>

            <Buttons>
              <Button color='whiteGreen' rounded uppercase to='#faca-parte'>
                Faça Parte
              </Button>
              <Button color='whiteGreen' rounded uppercase to='/'>
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
