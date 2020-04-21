import React from 'react'
import PropTypes from 'prop-types'

import Button from '@components/Button'
import Image from '@components/Image'

import {
  Container,
  ImageWrapper,
  ButtonsWrapper,
  Buttons,
  Title,
  Category,
} from './styles'

const Project = ({ image, title, category, show, color }) =>
  show ? (
    <Container color={color}>
      <ImageWrapper>
        <Image src={image} alt={title} fit='cover' />
        <ButtonsWrapper color={color}>
          <Buttons>
            <Button color='white-yellow' circle to='/'>
              <Image src='plus-orange.svg' alt='teste' />
            </Button>
            <Button color='white-yellow' circle to='/'>
              <Image src='link-orange.svg' alt='teste' />
            </Button>
          </Buttons>
        </ButtonsWrapper>
      </ImageWrapper>
      <Title>{title}</Title>
      <Category>{category}</Category>
    </Container>
  ) : (
    ''
  )

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  color: PropTypes.string,
  show: PropTypes.bool,
}

Project.defaultProps = {
  color: 'orange',
  show: true,
}

export default Project
