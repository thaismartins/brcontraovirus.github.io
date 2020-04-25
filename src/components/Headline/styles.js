import styled from 'styled-components'

const Card = styled.div`
  width: 250px;
  align-content: center;
  background: rgb(221,249,241);
  background: linear-gradient(90deg, rgba(221,249,241,1) 0%, rgba(255,255,255,1) 100%);
  margin: auto;
  position: relative;
  float: left;
`
const Logo = styled.div`
  border-style: solid;
  border-color: cyan;
  border-radius: 50px;
  width: 60px;
  align-content: center;
  background-color: white;
  z-index: 40;
  margin: auto;
  position: relative;
`

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 10;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

const HeadlineWrapper = styled.div`
  margin-top: -65px;
  padding-top: 30px;
  padding-left: 15px;
  height: 200px;
`
const HeadlineBox = styled.div`
  background-color: white;
  border-radius: 15px;
  margin: 30px;
-webkit-box-shadow: 0px 0px 28px 5px rgba(170,236,222,1);
-moz-box-shadow: 0px 0px 28px 5px rgba(170,236,222,1);
box-shadow: 0px 0px 28px 5px rgba(170,236,222,1);  
`

const ButtonWrapper = styled.div`
    margin-top: -30%;
    margin-left: 28%;
`

const Button = styled.a`
  background-image: linear-gradient(to right, #0cebeb 0%, #20e3b2 51%, #0cebeb 100%);
  padding: 6px;
  color: white;
`

export { ImageWrapper, Card, Logo, HeadlineWrapper, HeadlineBox, ButtonWrapper, Button }
