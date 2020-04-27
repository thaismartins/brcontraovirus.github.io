import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 0.5rem 0.25rem
    ${({ theme, color }) => theme.colors.shadows[color]};
  border-radius: 2.5rem;
  cursor: pointer;
  flex-basis: calc(33.33333% - 2rem);
  margin-top: 6rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  padding: 6rem 2rem 4rem;
  position: relative;
`

const Logo = styled.div`
  width: 8rem;
  height: 8rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  position: absolute;
  top: -6rem;
  left: 0;
  right: 0;

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
    background: ${({ theme, color }) => theme.colors.gradients[color]};
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`
const Text = styled.div`
  margin-bottom: 4rem;
  text-align: left;
`

export { Container, Logo, Text }
