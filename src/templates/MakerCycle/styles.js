import styled from 'styled-components'
import IconText from '@components/IconText'

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
  margin-bottom: 4rem;
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.white};
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const ImageWrapper = styled.div`
  flex-basis: 45%;
`

const TextWrapper = styled.div`
  flex-basis: 48%;
  color: ${({ theme }) => theme.colors.white};
`

const Text = styled.p`
  line-height: 2rem;
`

const Items = styled.ul`
  margin-top: 2rem;
`

const Equipaments = styled.div``

const Equipament = styled(IconText)``

export {
  Container,
  Title,
  Content,
  ImageWrapper,
  TextWrapper,
  Text,
  Items,
  Equipaments,
  Equipament,
}
