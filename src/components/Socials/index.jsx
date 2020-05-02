import React from 'react'

import { Container, Item } from './styles'

import links from './links'

const Socials = () => {
  return (
    <Container>
      {links.map((link, index) => (
        <Item
          key={index}
          href={link.href}
          target='_blank'
          rel='noopener noreferrer'
          type={link.type}
        />
      ))}
    </Container>
  )
}

export default Socials
