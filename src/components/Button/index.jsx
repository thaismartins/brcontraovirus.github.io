import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Button = ({ link, to, color, rounded, uppercase, children }) => (
  <Container link={link} color={color} rounded={rounded} uppercase={uppercase}>
    <Link to={to}>{children}</Link>
  </Container>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  link: PropTypes.bool,
  rounded: PropTypes.bool,
  uppercase: PropTypes.bool,
  color: PropTypes.string,
}

Button.defaultProps = {
  link: false,
  rounded: false,
  uppercase: false,
  color: '',
}

export default Button
