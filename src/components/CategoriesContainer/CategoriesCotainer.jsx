import React from 'react';
import PropTypes from 'prop-types';

const CategoriesContainer = ({ handleSelect }) => {
  return (
    <div className="container">
      <div className="row">
        <div style={{ fontSize: 30 }} className="col-sm text-right">Genre:</div>
        <div className="col-sm">
          <select className="custom-select sm" onChange={handleSelect}>
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

      </div>
    </div>
  );
};

CategoriesContainer.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default CategoriesContainer;
