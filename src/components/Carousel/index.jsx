import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'

import { Container } from './styles'
import settings from './settings'

const Carousel = ({ children, dots, arrows, color }) => {
  const configs = {
    ...settings,
    dots,
    arrows,
    prevArrow: <PrevArrow color={color} />,
    nextArrow: <NextArrow color={color} />,
  }

  return (
    <Container color={color} arrows={arrows}>
      <Slider {...configs}>{children}</Slider>
    </Container>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
}

Carousel.defaultProps = {
  color: 'purple',
  dots: false,
  arrows: false,
}

export default Carousel
