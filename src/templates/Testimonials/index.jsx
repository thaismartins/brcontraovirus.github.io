import React from 'react'

import Center from '@components/Center'
import IconText from '@components/IconText'
import Background from "@components/Background";

import testimonials from './testimonials'

import { Container, Title, Text, TestimonialsLists } from './styles'

const Testimonials = () => {
  return (
    <Container>
      <Background color='orange' full>
        <Center>
          <Title>Depoimentos</Title>
          <Text>Salvando vidas durante a epidemia de COVID-19</Text>

          <TestimonialsLists>
            {testimonials.map((testimony, index) => (
              <IconText
                key={index}
                title={testimony.author}
                description={testimony.content}
                icon={testimony.photo}
              />
            ))}
          </TestimonialsLists>
        </Center>
      </Background>
    </Container>
  )
}

export default Testimonials
