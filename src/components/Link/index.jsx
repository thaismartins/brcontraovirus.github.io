import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Link = ({ to, children, blank, className }) => (
  <>
    {blank && (
      <Container
        href={to}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
      >
        {children}
      </Container>
    )}

    {!blank && <Container href={to}>{children}</Container>}
  </>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  blank: PropTypes.bool,
  className: PropTypes.string,
}

Link.defaultProps = {
  blank: false,
  className: '',
}

export default Link
