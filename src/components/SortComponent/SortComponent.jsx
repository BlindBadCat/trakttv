import React from 'react';
import { NavLink } from 'react-router-dom';

const SortComponent = ({ genre, query }) => {
  return (
    <div className="jumbotron" style={{padding:10, paddingBottom:30,margin: 0}}>
      <h1 className="display-7" >Sort by:</h1>
      <div className="card" style={{ display: 'flex' }}>
        <div className="btn-group">
          <NavLink
            to={`/watched/${genre}/1${query ? `/${query}` : ''}`}
            style={{ flex: 1, listStyleType: 'none' }}
            activeClassName="selected"
            className="btn btn-dark"
          >
            Watched
          </NavLink>
          <NavLink
            to={`/collected/${genre}/1${query ? `/${query}` : ''}`}
            style={{ flex: 1, listStyleType: 'none' }}
            activeClassName="selected"
            className="btn btn-dark"
          >
            Collected
          </NavLink>
          <NavLink
            to={`/played/${genre}/1${query ? `/${query}` : ''}`}
            style={{ flex: 1, listStyleType: 'none' }}
            activeClassName="selected"
            className="btn btn-dark"
          >
            Played
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SortComponent;
