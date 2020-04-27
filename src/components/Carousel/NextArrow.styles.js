import styled from 'styled-components'
import ArrowRight from '@images/icons/arrow-right.png'

const Container = styled.div`
  width: 3rem;
  height: 4rem;
  position: absolute;
  right: 1rem;
  top: 30%;
  cursor: pointer;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    mask-image: url(${ArrowRight});
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
    background: ${({ theme, color }) => theme.colors.gradients[color]};
  }
`

export { Container }
