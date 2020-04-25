import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 4rem 0;
`

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;
`

const NumbersLists = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
`

const Hospitals = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Hospital = styled.div`
  flex: 0 1 calc(50% - 1rem);
`

export { Container, Title, NumbersLists, Hospitals, Hospital }
