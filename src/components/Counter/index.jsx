import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'

import { Container, Icon, Number, Description } from './styles'

const style = {
  width: '80%',
  height: '80%',
  bottom: 0,
  right: 0,
  margin: 'auto',
}

const Counter = ({ number, description, icon, color }) => {
  const numberRef = useRef(null)

  useEffect(() => {
    let counter = 1
    const total = number + 1
    const additional = total / 6000000000000

    const inv = setInterval(() => {
      if (counter < total) {
        numberRef.current.innerHTML = counter
        counter += 1
      } else clearInterval(inv)
    }, additional)
  }, [])

  return (
    <Container>
      <Icon color={color}>
        <Image src={`icons/${icon}`} alt={description} style={style} />
      </Icon>
      <Number color={color} ref={numberRef} />
      <Description>{description}</Description>
    </Container>
  )
}

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Counter.defaultProps = {
  color: 'green',
}

export default Counter
