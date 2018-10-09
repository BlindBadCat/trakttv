import React from 'react';
import PropTypes from 'prop-types';

const SearchContainer = ({ handleSubmit }) => (
  <form style={{ margin: 20 }} className="form-inline text-center" onSubmit={handleSubmit}>
    <input type="text" className="form-control mb-2 mr-sm-2" id="search" placeholder="Search" />
    <button style={{ marginBottom: 10 }} type="submit" className="btn btn-primary btn-sm">Search</button>
  </form>
);

SearchContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchContainer;
