import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    width: 90%;
    height: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 0;
    display: ${({ border }) => (border ? 'block' : 'none')};

    ${({ theme, color }) =>
      color &&
      `
      background: ${theme.colors.gradients[color]};
    `};
  }
`

const Wrapper = styled.div`
  width: fit-content;
  max-width: 100%;
  border-radius: 2rem;
  padding: 0.75rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
  font-size: 2rem;

  ${({ theme, color }) =>
    color &&
    `
    background: ${theme.buttons[color].background};
  `};

  @media ${media.max.medium} {
    font-size: 1.5rem;
  }
`

export { Container, Wrapper }
