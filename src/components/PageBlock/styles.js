import styled from 'styled-components'
import media from '@layouts/media'

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 60vh;
  overflow: hidden;
  padding-top: 3rem;
  top: -2rem;

  &:before {
    content: '';
    width: 100%;
    height: 200%;
    position: absolute;
    top: -100%;

    ${({ theme, color }) =>
      color &&
      `
      background: ${theme.colors[color]};
      background: radial-gradient(circle, ${theme.colors[color]} -100%, rgba(255,255,255,0) 65%);
    `};
  }

  @media ${media.max.medium} {
    top: -1.8rem;
  }
`

export { Content }
