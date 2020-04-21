import React from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'

import { Container, Icon, Title, Description } from './styles'

const IconText = ({ title, description, icon, color, border }) => (
  <Container>
    <Icon border={border}>
      <Image src={icon} alt={title} />
    </Icon>
    <Title color={color}>{title}</Title>
    <Description>{description}</Description>
  </Container>
)

IconText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  border: PropTypes.string,
}

IconText.defaultProps = {
  color: 'white-green',
  border: 'green',
}

export default IconText
