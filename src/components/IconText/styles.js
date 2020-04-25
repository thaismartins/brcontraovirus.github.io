import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Icon = styled.div`
  width: 8rem;
  height: 8rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;

  &:before {
    content: '';
    width: calc(100% + 0.5rem);
    height: calc(100% + 0.5rem);
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    margin: auto;
    z-index: -1;
    border-radius: 50%;
    background: ${({ theme, border }) => theme.colors.gradients[border]};
  }

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
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
    background-image: ${theme.buttons[color].color};
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  `};
`

const Description = styled.p`
  margin-bottom: 1rem;
`

export { Container, Icon, Title, Description }
