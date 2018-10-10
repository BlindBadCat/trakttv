import React from 'react';
import PropTypes from 'prop-types';

const ShowTableRowComponent = ({ children }) => <tr>{ children }</tr>;

ShowTableRowComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShowTableRowComponent;
