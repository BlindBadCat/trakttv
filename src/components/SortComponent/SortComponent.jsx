import React from 'react';

const SortComponent = ({handleSelect}) => {
  const select = (e) => {
    e.preventDefault();
    const { value } = e.target;
    handleSelect(value);
  };
  return (

    <div>
      Sort:
      <select className="custom-select" onChange={select}>
        <option value="watched">Watched</option>
        <option value="collected">Collected</option>
        <option value="played">Played</option>
      </select>

    </div>
  );
};


export default SortComponent;
