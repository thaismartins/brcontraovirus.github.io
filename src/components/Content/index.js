import React from 'react';
import PropTypes from "prop-types";

import { Container } from './styles';

const Content = ({ children }) => (
  <Container>
    {children}
  </Container>
)

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content