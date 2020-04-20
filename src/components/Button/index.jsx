import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Button = ({ link, to, children }) => (
  <Container link={link}>
    <Link to={to}>{children}</Link>
  </Container>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  link: PropTypes.bool,
}

Button.defaultProps = {
  link: false,
}

export default Button
