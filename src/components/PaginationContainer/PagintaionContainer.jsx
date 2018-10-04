import React from 'react';

const PaginationContainer = ({ handleClick, pagination }) => {
  const click = (e) => {
    e.preventDefault();
    const page = e.target.id;
    handleClick(page);
  };

  const { pageCount, currentPage } = pagination;
  const pageButtons = (
    <div className="btn-group " style={{ margin: 10 }} role="group" aria-label="Basic example">
      {currentPage > 4 ? <button onClick={click} id={1} type="button" className="btn btn-info">First</button> : '' }
      {currentPage > 3 ? <button onClick={click} id={currentPage - 3} type="button" className="btn btn-info">{currentPage - 3}</button> : ''}
      {currentPage > 2 ? <button onClick={click} id={currentPage - 2} type="button" className="btn btn-info">{currentPage - 2}</button> : ''}
      {currentPage > 1 ? <button onClick={click} id={currentPage - 1} type="button" className="btn btn-info">{currentPage - 1}</button> : ''}
      <button onClick={click} id={currentPage} type="button" className="btn btn-info" disabled>{currentPage}</button>
      {currentPage < pageCount - 1 ? <button onClick={click} id={currentPage + 1} type="button" className="btn btn-info">{currentPage + 1}</button> : '' }
      {currentPage < pageCount - 2 ? <button onClick={click} id={currentPage + 2} type="button" className="btn btn-info">{currentPage + 2}</button> : '' }
      {currentPage < pageCount - 3 ? <button onClick={click} id={currentPage + 3} type="button" className="btn btn-info">{currentPage + 3}</button> : '' }
      {currentPage !== pageCount ? <button onClick={click} id={pageCount} type="button" className="btn btn-info">Last</button> : '' }
    </div>
  );
  return (
    pageButtons
  );
};

export default PaginationContainer;
