import React from 'react'
import Headline from '@components/Headline'

const Press = () => {
  return (
    <div>
      <Headline
        image='globo.png'
        title='globo'
        text='Com falta de equipamentos de proteção individual, hospitais contam com doações da sociedade civil.'
        link='http://google.com'
      />
      <Headline
        image='g1.png'
        title='g1'
        text='Brasileira cria rede para imprimir em 3D equipamentos de UTI usados no tratamento contra o coronavírus.'
        link='http://google.com'
      />
      <Headline
        image='sbt.jpeg'
        title='sbt'
        text='Mais de cem empresas poderão usar as linhas de montagem para fabricar respiradores hospitalares.'
        link='http://google.com'
      />
    </div>
  )
}

export default Press
