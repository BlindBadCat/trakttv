import React from 'react';
import { NavLink } from 'react-router-dom';

const PaginationButtonComponent = ({
  page, query, sort, genre,
}) => (
  <NavLink
    to={`/${sort}/${genre}/${page}${query ? `/${query}` : ''}`}
    style={{ flex: 1, listStyleType: 'none' }}
    activeClassName="selected"
    className="btn btn-dark"
  >
    {page}
  </NavLink>
);

export default PaginationButtonComponent;
