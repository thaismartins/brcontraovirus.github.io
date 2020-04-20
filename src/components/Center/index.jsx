import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Center = ({ children, className }) => (
  <Container className={className}>{children}</Container>
)

Center.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Center.defaultProps = {
  className: '',
}

export default Center
