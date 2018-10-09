import React from 'react';

const SortComponent = ({ handleSelect }) => (
  <div className="container">
    <div className="row">
      <div className="col-sm text-right">
          Sort:
      </div>
      <div className="col-sm">
        <select className="custom-select" onChange={handleSelect}>
          <option value="watched">Watched</option>
          <option value="collected">Collected</option>
          <option value="played">Played</option>
        </select>
      </div>
    </div>
  </div>

);


export default SortComponent;
