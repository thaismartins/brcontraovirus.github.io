import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './NextArrow.styles'

const NextArrow = ({ className, style, onClick, color }) => (
  <Container
    className={className}
    onClick={onClick}
    style={{ ...style }}
    color={color}
  />
)

NextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
}

NextArrow.defaultProps = {
  color: 'purple',
}

export default NextArrow
