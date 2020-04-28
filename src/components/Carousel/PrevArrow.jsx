import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './PrevArrow.styles'

const PrevArrow = ({ className, style, onClick, color }) => (
  <Container
    className={className}
    onClick={onClick}
    style={{ ...style }}
    color={color}
  />
)

PrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
}

PrevArrow.defaultProps = {
  color: 'purple',
}

export default PrevArrow
