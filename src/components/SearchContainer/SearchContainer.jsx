import React from 'react';
import PropTypes from 'prop-types';

const SearchContainer = ({ handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    const { value } = e.target.search;
    handleSubmit(value);
  };
  return (
    <form className="form-inline" onSubmit={submit}>

      <input type="text" className="form-control mb-2 mr-sm-2" id="search" placeholder="Search" />
      <button style={{ margin: 5 }} type="submit" className="btn btn-info mb-2">Search</button>
    </form>
  );
};

SearchContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchContainer;
