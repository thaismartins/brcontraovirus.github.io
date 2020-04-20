import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  margin-top: 1.45rem;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Logo = styled.div`
  width: 50%;
  max-width: 150px;
`

export { Container, Logo }
