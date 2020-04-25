import React from 'react'
import Image from '@components/Image'

import {ImageWrapper, Card, Logo, HeadlineBox, HeadlineWrapper, ButtonWrapper, Button } from './styles'

const Headline = ({ text, buttonText, linkTo, image, alt }) => {
    return (
        <Card>
            <Logo>
                <ImageWrapper>
                    <Image src={image} alt={alt} fit='cover'/>
                </ImageWrapper>
            </Logo>
            
            <HeadlineBox>
                <HeadlineWrapper>
                    <p>{text}</p>
                </HeadlineWrapper>
            </HeadlineBox>

            <ButtonWrapper>
                <Button href={linkTo}>{buttonText}</Button>
            </ButtonWrapper>
        </Card>
    )
}

export default Headline