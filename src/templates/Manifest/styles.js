import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.white};
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.white};
`

const Text = styled.p`
  width: 80%;
  margin: auto;
  font-size: 1.25rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.white};
`

export { Container, Title, Text }
