import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 0.8;
    }
  }
`

export { Container }
