import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin-bottom: 1.45rem;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 4px solid ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 100;
  align-items: ${({ open }) => (open ? 'flex-start' : 'center')};

  ${({ open }) => (open ? 'height: 100vh' : '')};
`

const Logo = styled.div`
  width: 8.75rem;
  max-width: 50%;
`

export { Container, Logo }
