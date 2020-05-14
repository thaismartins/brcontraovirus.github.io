import React from 'react'

import Background from '@components/Background'
import Center from '@components/Center'
import Image from '@components/Image'

import {
  Container,
  Title,
  Blocks,
  Block,
  Subtitle,
  Text,
  List,
  Item,
  Name,
  Buttons,
  Button,
} from './styles'

import networks from './networks'

const style = {
  width: '70%',
  height: '70%',
  bottom: 0,
  right: 0,
  margin: 'auto',
}

const MakePart = () => {
  return (
    <Container id='faca-parte'>
      <Background color='green' full>
        <Center>
          <Title>Faça parte dessa rede</Title>

          <Blocks>
            <Block border>
              <Subtitle>Preciso de ajuda</Subtitle>
              <Text>
                Cadastre sua instituição, informe a sua necessidade e receba
                doações.
              </Text>

              <List>
                {networks.institutions.map((institution, index) => (
                  <Item
                    key={index}
                    href={institution.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={`icons/${institution.icon}`}
                      alt={institution.title}
                      style={style}
                    />
                    <Name>{institution.title}</Name>
                  </Item>
                ))}
              </List>

              <Buttons>
                <Button color='whiteGreen' rounded uppercase to='/'>
                  Inscreva-se
                </Button>
              </Buttons>
            </Block>

            <Block>
              <Subtitle>Quero ajudar</Subtitle>
              <Text>
                Ajude a produzir EPIs para os profissionais que devemos proteger
                ou contribua com uma doação monetária.
              </Text>

              <List>
                {networks.volunteers.map((volunteer, index) => (
                  <Item
                    key={index}
                    href={volunteer.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={`icons/${volunteer.icon}`}
                      alt={volunteer.title}
                      style={style}
                    />
                    <Name>{volunteer.title}</Name>
                  </Item>
                ))}
              </List>

              <Buttons>
                <Button color='whiteGreen' rounded uppercase to='/'>
                  Vaquinha
                </Button>

                <Button color='whiteGreen' rounded uppercase to='/'>
                  Junte-se a Nós
                </Button>
              </Buttons>
            </Block>
          </Blocks>
        </Center>
      </Background>
    </Container>
  )
}

export default MakePart
