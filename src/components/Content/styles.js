import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  max-width: 73.125rem;
  margin: auto;

  @media ${media.max.medium} {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`

export { Container }
