import React from 'react'
import Headline from '@components/Headline'

const Press = () => {
    return (
        <div>
            <Headline
                image='globo.png'
                alt='globo'
                text='Com falta de equipamentos de proteção individual, hospitais contam com doações da sociedade civil.'
                buttonText='Saiba mais'
                linkTo=''
            />
            <Headline
                image='g1.png'
                alt='g1'
                text='Brasileira cria rede para imprimir em 3D equipamentos de UTI usados no tratamento contra o coronavírus.'
                buttonText='Saiba mais'
                linkTo=''
            />
            <Headline
                image='sbt.jpeg'
                alt='sbt'
                text='Mais de cem empresas poderão usar as linhas de montagem para fabricar respiradores hospitalares.'
                buttonText='Saiba mais'
                linkTo=''
            />
        </div>
    )
}

export default Press