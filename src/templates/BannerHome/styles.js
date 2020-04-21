import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.25rem 0.25rem 0 ${({ theme }) => theme.colors.dark};
`

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.25rem 0.25rem 0 ${({ theme }) => theme.colors.dark};
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 24rem;
`

export { Container, Content, Title, Subtitle, Buttons }
