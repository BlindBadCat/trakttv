import React from 'react';
import PropTypes from 'prop-types';

const ShowTableRowComponent = ({ children,descId }) => <tr data-toggle="modal" data-target={`#${descId}`}>{ children }</tr>;

ShowTableRowComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShowTableRowComponent;
