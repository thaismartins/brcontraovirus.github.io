import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`

const Description = styled.p``

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  opacity: 0.8;
`

export { Container, Title, Description, ImageWrapper }
