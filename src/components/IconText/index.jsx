import React from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'

import { Container, Icon, Title, Text } from './styles'

const IconText = ({ icon, title, text, color, rtl, gradient, className }) => (
  <Container color={color} rtl={rtl} className={className}>
    <Icon rtl={rtl}>
      <Image src={icon} alt={title} />
    </Icon>
    <Title rtl={rtl} gradient={gradient}>
      {title}
    </Title>
    <Text rtl={rtl} dangerouslySetInnerHTML={{ __html: text }} />
  </Container>
)

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  rtl: PropTypes.bool,
  gradient: PropTypes.bool,
  className: PropTypes.string,
}

IconText.defaultProps = {
  color: '',
  rtl: false,
  gradient: false,
  className: '',
}

export default IconText
