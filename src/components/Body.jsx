import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ children }) => (<table className="table table-hover">{children}</table>);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
