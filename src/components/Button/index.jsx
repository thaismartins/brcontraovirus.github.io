import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Button = ({
  link,
  to,
  color,
  rounded,
  circle,
  uppercase,
  children,
  center,
  blank,
  className,
}) => (
  <Container
    link={link}
    color={color}
    rounded={rounded}
    circle={circle}
    uppercase={uppercase}
    center={center}
    className={className}
  >
    {blank && (
      <a href={to} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    )}

    {!blank && <Link to={to}>{children}</Link>}
  </Container>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  link: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  uppercase: PropTypes.bool,
  center: PropTypes.bool,
  blank: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
}

Button.defaultProps = {
  link: false,
  rounded: false,
  circle: false,
  uppercase: false,
  center: false,
  blank: false,
  className: '',
  color: 'green',
}

export default Button
