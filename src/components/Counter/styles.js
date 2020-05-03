import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${media.max.medium} {
    text-align: center;
  }
`

const Icon = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: ${({ theme, color }) => theme.colors.gradients[color]};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 0.25rem;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
  }
`

const Title = styled.p`
  font-size: 4rem;
  font-weight: 800;

  ${({ theme, color }) =>
    color &&
    `
    font-weight: 800;
    background-color: ${theme.buttons[color].color};
    background-image: ${theme.colors.gradients[color]};
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  `};

  @media ${media.max.medium} {
    font-size: 3rem;
  }
`

const Description = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;
`

export { Container, Icon, Title, Description }
