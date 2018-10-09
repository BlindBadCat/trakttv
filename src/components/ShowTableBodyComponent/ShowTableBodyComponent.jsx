import React from 'react';
import PropTypes from 'prop-types';

const ShowTableBodyComponent = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);

ShowTableBodyComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShowTableBodyComponent;
