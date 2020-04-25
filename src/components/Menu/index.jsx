// import React, { useEffect } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

import Button from '@components/Button'

import items from './items'

import { Items, Item } from './styles'

const Header = ({ open }) => {
  return (
    <Items open={open}>
      {items.map((item, index) => (
        <Item key={index}>
          <Button to={item.link}>{item.title}</Button>
        </Item>
      ))}
    </Items>
  )
}

Header.propTypes = {
  open: PropTypes.bool,
}

Header.defaultProps = {
  open: false,
}

export default Header
