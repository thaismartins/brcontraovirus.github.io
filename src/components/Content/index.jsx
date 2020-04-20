import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Content = ({ children, className }) => (
  <Container className={className}>{children}</Container>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Content.defaultProps = {
  className: '',
}

export default Content
