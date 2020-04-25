import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  margin-top: 1.45rem;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Logo = styled.div`
  width: 50%;
  max-width: 9.375rem;
`

export { Container, Logo }
