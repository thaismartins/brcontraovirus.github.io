import React from 'react'

import Layout from '@layouts/Default'

import SEO from '@components/SEO'

import BannerHome from '@templates/BannerHome'
import Numbers from '@templates/Numbers'
import Manifest from '@templates/Manifest'
import Projects from '@templates/Projects'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <BannerHome />
    <Numbers />
    <Manifest />
    <Projects />
  </Layout>
)

export default IndexPage
