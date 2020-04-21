import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.white};
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 1rem;
  margin: 2rem 0;
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.orange};
`

const Text = styled.p`
  width: 80%;
  margin: auto;
  font-size: 1.25rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 3rem;
`

const Projects = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`

const Categories = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`

const Category = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 800;
  width: fit-content;
  max-width: 100%;
  padding: 0.75rem 2.5rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  text-transform: uppercase;
  margin-right: 1rem;
  border-radius: 2rem;

  ${({ theme, active }) =>
    active &&
    `
    background: ${theme.colors.orange};
    color: ${theme.colors.white};
  `}

  &:hover {
    opacity: 0.8;
  }
`

export { Container, Title, Text, Projects, Categories, Category }
