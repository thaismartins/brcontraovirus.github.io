import styled from 'styled-components'

const Container = styled.div`
  a {
    color: ${({ theme }) => theme.colors.green};
    transition: ${({ theme }) => theme.transition};
    width: fit-content;
    max-width: 100%;
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme, color }) =>
      color &&
      `
      background: ${theme.buttons[color].background};
      color: ${theme.buttons[color].color};
      font-weight: 800;
    `};

    ${({ rounded }) =>
      rounded &&
      `
      border-radius: 2rem;
    `};

    &:hover {
      opacity: 0.9;
    }
  }
`

export { Container }
