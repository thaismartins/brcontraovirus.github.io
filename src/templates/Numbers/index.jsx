import React from 'react'

import Center from '@components/Center'
import PageTitle from '@components/PageTitle'
import IconText from '@components/IconText'

import { Container, Title, NumbersLists } from './styles'

const Numbers = () => {
  const numbers = [
    {
      title: '1900',
      description: 'Profissionais da Saúde',
      icon: 'health.svg',
    },
    {
      title: '1600',
      description: 'Voluntários Cadastrados',
      icon: 'health.svg',
    },
    {
      title: '700',
      description: 'Impressoras 3D',
      icon: 'health.svg',
    },
    {
      title: '970',
      description: 'Doações',
      icon: 'health.svg',
    },
  ]

  return (
    <Container>
      <Center>
        <Title>Números</Title>
        <PageTitle color='green' border>
          Já contamos com
        </PageTitle>

        <NumbersLists>
          {numbers.map((number, index) => (
            <IconText
              key={index}
              title={number.title}
              description={number.description}
              icon={number.icon}
            />
          ))}
        </NumbersLists>

        <PageTitle color='green' border>
          Doações
        </PageTitle>
      </Center>
    </Container>
  )
}

export default Numbers
