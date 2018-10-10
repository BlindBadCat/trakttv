import React from 'react';
import PropTypes from 'prop-types';

const SortComponent = ({ handleSelect }) => (
  <div className="col-sm">
    <div style={{ fontSize: 30 }} className="col-sm text-center">Sort:</div>
    <select className="custom-select" onChange={handleSelect}>
      <option value="watched">Watched</option>
      <option value="collected">Collected</option>
      <option value="played">Played</option>
    </select>
  </div>
);

SortComponent.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default SortComponent;
