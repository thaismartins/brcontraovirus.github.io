import styled from 'styled-components'
import media from '@layouts/media'

import WhatsappIcon from '@images/icons/whatsapp.svg'

const Container = styled.header`
  width: 100%;
  margin-top: 2rem;
  padding: 4rem 0;
  background: linear-gradient(20deg, #f1f1f1, #ebebeb);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media ${media.max.small} {
    flex-direction: column;
  }
`

const Logo = styled.div`
  width: 50%;
  max-width: 13rem;

  @media ${media.max.small} {
    width: 100%;
    margin: 0 auto 3rem;
  }
`

const Details = styled.div`
  text-align: right;

  @media ${media.max.small} {
    width: 100%;
    margin: 0 auto 3rem;
  }
`

const Address = styled.div`
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
`

const Email = styled.a`
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  display: block;
  color: ${({ theme }) => theme.colors.dark};
`

const Phones = styled.div`
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  position: relative;

  &:before {
    content: '';
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.5rem;
    margin: auto;
    background-image: url(${WhatsappIcon});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1;
  }
`

const Phone = styled.div``

export { Container, Logo, Details, Address, Email, Phones, Phone }
