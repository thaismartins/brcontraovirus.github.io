import React from 'react'

import Layout from '@layouts/Default'

import SEO from '@components/SEO'
import BannerHome from '@templates/BannerHome'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <BannerHome />
  </Layout>
)

export default IndexPage
