import React from 'react'

import Center from '@components/Center'
import PageTitle from '@components/PageTitle'
import IconText from '@components/IconText'
import ProgressBar from '@components/ProgressBar'

import numbers from './numbers'
import hospitals from './hospitals'

import { Container, Title, NumbersLists, Hospitals, Hospital } from './styles'

const Numbers = () => {
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

        <Hospitals>
          {hospitals.map((hospital, index) => (
            <Hospital key={index}>
              <ProgressBar
                title={hospital.title}
                total={hospital.total}
                units={hospital.units}
              />
            </Hospital>
          ))}
        </Hospitals>
      </Center>
    </Container>
  )
}

export default Numbers
