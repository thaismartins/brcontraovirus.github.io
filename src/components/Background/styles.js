import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: ${({ theme, color }) =>
    color ? theme.colors.gradients[color] : ''};
  overflow: hidden;
  position: relative;
  padding: 4rem 0;

  ${({ full }) => (full ? 'min-height: 80vh;' : '')};
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export { Container, ImageWrapper, ContentWrapper }
