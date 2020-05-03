import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, Units, Progress } from './styles'

const ProgressBar = ({ title, units, total, color, unit }) => (
  <Container>
    <Title>{title}</Title>
    <Units>
      {units} {unit}
    </Units>
    <Progress percentage={(units * 100) / total} color={color} />
  </Container>
)

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  color: PropTypes.string,
}

ProgressBar.defaultProps = {
  color: 'green',
}

export default ProgressBar
