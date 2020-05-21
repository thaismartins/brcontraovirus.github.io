import React from 'react'
import PropTypes from 'prop-types'

import Center from '@components/Center'
import Background from '@components/Background'

import { Container, Content, Title, Subtitle, Buttons, Button } from './styles'

const Banner = ({ full }) => {
  return (
    <Container id='topo'>
      <Background image='banner.jpg' alt='Brasil contra o Vírus' full={full}>
        <Center>
          <Content full={full}>
            <Title>Brasil contra o Vírus</Title>

            <Subtitle>
              Rede colaborativa de combate ao COVID-19 no Brasil
            </Subtitle>

            <Buttons>
              <Button color='whiteGreen' rounded uppercase to='/#faca-parte'>
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

Banner.propTypes = {
  full: PropTypes.bool,
}

Banner.defaultProps = {
  full: false,
}

export default Banner
