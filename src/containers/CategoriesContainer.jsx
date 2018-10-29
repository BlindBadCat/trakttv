import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import HeadNavigationLinksComponent from '../components/HeadNavigationLinksComponent';
import C from '../constants';

class CategoriesContainer extends React.Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const {
      sort = 'watched', query = '',
    } = params;

    return (
      <HeadNavigationLinksComponent title="Genre">
        {C.GENRES.map(genre => (
          <NavLink
            to={`/${sort}/${genre}/1${query ? `/${query}` : ''}`}
            style={{ flex: 1, listStyleType: 'none' }}
            activeClassName="selected"
            className="btn btn-dark"
          >
            {`${genre.charAt(0).toUpperCase()+genre.slice(1)}`}
          </NavLink>
        ))}
      </HeadNavigationLinksComponent>
    );
  }
}


export default withRouter(CategoriesContainer);
