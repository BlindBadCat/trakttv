import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import C from '../constants';
import HeadNavigationLinksComponent from '../components/HeadNavigationLinksComponent';

class SortContainer extends React.Component {
  render() {

    const { match } = this.props;
    const { params } = match;
    const {
      genre = '', query = '',
    } = params;
    return (
      <HeadNavigationLinksComponent title="Sort by">
        {C.SORT.map(sort => (
          <NavLink
            to={`/${sort}/${genre}/1${query ? `/${query}` : ''}`}
            style={{ flex: 1, listStyleType: 'none' }}
            activeClassName="selected"
            className="btn btn-dark"
          >
            {`${sort.charAt(0).toUpperCase()+sort.slice(1)}`}
          </NavLink>
        ))}
      </HeadNavigationLinksComponent>
    );
  }
}

export default withRouter(SortContainer);
