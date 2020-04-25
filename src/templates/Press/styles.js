import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.orange};
`
const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.white};
`

const Content = styled.p`
    background-color: red;
`

const ImageWrapper = styled.div`
  flex-basis: 45%;
`
