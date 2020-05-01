import styled from 'styled-components'

import TwitterIcon from '@images/twitter.svg'
import FacebookIcon from '@images/facebook.svg'
import InstagramIcon from '@images/instagram.svg'

const icons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
}

const Container = styled.div`
  padding: 0.75rem 0;
  display: flex;
  justify-content: flex-end;
`
const Item = styled.a`
  width: 1.75rem;
  height: 1.75rem;
  background-image: url(${TwitterIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 0.5rem;
  cursor: pointer;
  display: block;
  mask-image: url(${({ type }) => icons[type]});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background: ${({ theme }) => theme.colors.dark};

  &:hover {
    background: ${({ theme }) => theme.colors.gradients.purple};
  }
`

export { Container, Item }
