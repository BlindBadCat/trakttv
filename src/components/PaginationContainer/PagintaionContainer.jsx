import React from 'react';
import PropTypes from 'prop-types';

const PaginationContainer = ({ handleClick, pageCount, currentPage }) => {
  const pageButtons = (
    <div style={{ margin: 20, transform: 'translatex(-18%)' }} className="col-sm text-center">
      <div className="btn-group " style={{ margin: 10 }} role="group" aria-label="Basic example">
        {currentPage > 4 ? <button onClick={handleClick} id={1} type="button" className="btn btn-info">First</button> : '' }
        {currentPage > 3 ? <button onClick={handleClick} id={currentPage - 3} type="button" className="btn btn-info">{currentPage - 3}</button> : ''}
        {currentPage > 2 ? <button onClick={handleClick} id={currentPage - 2} type="button" className="btn btn-info">{currentPage - 2}</button> : ''}
        {currentPage > 1 ? <button onClick={handleClick} id={currentPage - 1} type="button" className="btn btn-info">{currentPage - 1}</button> : ''}
        <button onClick={handleClick} id={currentPage} type="button" className="btn btn-info" disabled>{currentPage}</button>
        {currentPage < pageCount - 1 ? <button onClick={handleClick} id={currentPage + 1} type="button" className="btn btn-info">{currentPage + 1}</button> : '' }
        {currentPage < pageCount - 2 ? <button onClick={handleClick} id={currentPage + 2} type="button" className="btn btn-info">{currentPage + 2}</button> : '' }
        {currentPage < pageCount - 3 ? <button onClick={handleClick} id={currentPage + 3} type="button" className="btn btn-info">{currentPage + 3}</button> : '' }
        {currentPage !== pageCount && pageCount !== 0 ? <button onClick={handleClick} id={pageCount} type="button" className="btn btn-info">Last</button> : '' }
      </div>
    </div>
  );
  return (
    pageButtons
  );
};

PaginationContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default PaginationContainer;
