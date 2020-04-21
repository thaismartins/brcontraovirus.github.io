import styled from 'styled-components'

const Container = styled.div`
  ${({ rounded }) =>
    rounded &&
    `
    border-radius: 2rem;
  `};

  ${({ theme, color }) =>
    color &&
    `
    background: ${theme.buttons[color].background};
  `};

  a {
    color: ${({ theme }) => theme.colors.green};
    transition: ${({ theme }) => theme.transition};
    width: fit-content;
    max-width: 100%;
    padding: 0.75rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};

    ${({ theme, color }) =>
      color &&
      `
      font-weight: 800;
      background-color: ${theme.buttons[color].color};
      background-image: ${theme.buttons[color].color};
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -moz-text-fill-color: transparent;
    `};

    &:hover {
      opacity: 0.9;
    }
  }
`

export { Container }
