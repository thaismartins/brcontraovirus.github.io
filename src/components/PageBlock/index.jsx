import React from 'react'
import PropTypes from 'prop-types'

import PageTitle from '@components/PageTitle'
import Center from '@components/Center'

import { Content } from './styles'

const PageBlock = ({ children, title, color }) => (
  <>
    {title && (
      <Center>
        <PageTitle color={color} border>
          {title}
        </PageTitle>
      </Center>
    )}
    <Content color={color}>{children}</Content>
  </>
)

PageBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
}

PageBlock.defaultProps = {
  title: '',
  color: 'purple',
}

export default PageBlock
