import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ handleSelect }) => {
  const select = (e) => {
    e.preventDefault();
    const { value } = e.target;
    handleSelect(value);
  };
  return (
    <div>
      Genre:
      <select className="custom-select" onChange={select}>
        <option value="">None</option>
        <option value="action">Action</option>
        <option value="anime">Anime</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
        <option value="musical">Musical</option>
        <option value="sports">Sports</option>
        <option value="thriller">Thriller</option>
        <option value="war">War</option>
      </select>

    </div>
  );
};

Categories.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default Categories;
