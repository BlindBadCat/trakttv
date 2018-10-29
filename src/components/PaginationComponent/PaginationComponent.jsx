import React from 'react';
import PropTypes from 'prop-types';

const PaginationComponent = ({ children }) => (
  <div style={{ margin: 20, transform: 'translatex(-18%)' }} className="col-sm text-center">
    <div className="btn-group " style={{ margin: 10 }} role="group" aria-label="Basic example">
      {children}
    </div>
  </div>
);

PaginationComponent.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PaginationComponent;
