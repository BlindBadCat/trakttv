import React from 'react';
import PropTypes from 'prop-types';

const SearchContainer = ({ handleInput }) => (
  <input type="text" className="form-control mb-2 mr-sm-2" id="search" placeholder="Search" onInput={handleInput} />
);

SearchContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchContainer;
