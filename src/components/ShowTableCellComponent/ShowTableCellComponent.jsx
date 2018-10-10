import React from 'react';
import PropTypes from 'prop-types';

const ShowTableCellComponent = ({ content }) => <td style={{ fontSize: 25 }}>{content}</td>;

ShowTableCellComponent.propTypes = {
  content: PropTypes.node.isRequired,
};

export default ShowTableCellComponent;
