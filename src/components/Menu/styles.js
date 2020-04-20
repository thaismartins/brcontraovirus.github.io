import styled from 'styled-components'

const Items = styled.ul`
  width: 100%;
  display: ${({ open }) => (open ? 'block' : 'none')};
`

const Item = styled.li`
  padding: 0.25rem 0;
`

export { Items, Item }
