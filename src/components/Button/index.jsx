import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Button = ({ link, to, color, rounded, children }) => (
  <Container link={link} color={color} rounded={rounded}>
    <Link to={to}>{children}</Link>
  </Container>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  link: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.string,
}

Button.defaultProps = {
  link: false,
  rounded: false,
  color: '',
}

export default Button
