import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6rem;
  padding: 1rem 2rem 1rem 10rem;
  margin: 1rem 0;
  min-height: 9.5rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${media.max.medium} {
    padding: 2rem;
    border-radius: 2rem;
  }
`

const Photo = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 1rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-image: ${({ theme, color }) => theme.colors.gradients[color]};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 0.25rem;
  border-radius: 50%;
  overflow: hidden;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media ${media.max.medium} {
    position: relative;
    right: 0;
    margin: 0 auto 2rem;
  }
`
const Text = styled.p`
  @media ${media.max.medium} {
    margin-bottom: 2rem;
  }
`

const Details = styled.div``

const Name = styled.p`
  font-weight: 700;
`

const Occupation = styled.p`
  color: ${({ theme, color }) => theme.colors[color]};
`

export { Container, Photo, Text, Details, Name, Occupation }
