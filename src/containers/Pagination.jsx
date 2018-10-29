import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PaginationButtonComponent from '../components/PaginationButtonComponent';

import PaginationComponent from '../components/PaginationComponent';

class Pagination extends React.Component {
  render() {
    const { pageCount } = this.props;
    const { match } = this.props;
    const { params } = match;
    const {
      sort = 'watched', query = '', genre = '',
    } = params;
    let { page } = params;
    page = parseInt(page, 10);
    return (
      <PaginationComponent>
        {page > 4 ? <PaginationButtonComponent sort={sort} genre={genre} query={query} page={1} /> : '' }
        {page > 3 ? <PaginationButtonComponent sort={sort} genre={genre} query={query} page={page - 3} /> : ''}
        {page > 2 ? <PaginationButtonComponent sort={sort} genre={genre} query={query} page={page - 2} /> : ''}
        {page > 1 ? <PaginationButtonComponent sort={sort} genre={genre} query={query} page={page - 1} /> : ''}
        <PaginationButtonComponent sort={sort} genre={genre} query={query} page={page} />
        {page < pageCount - 1 ? <PaginationButtonComponent sort={sort} genre={genre} query={query} page={page + 1} /> : '' }
        {page < pageCount - 2 ? <PaginationButtonComponent sort={sort} genre={genre} query={query} page={page + 2} /> : '' }
        {page < pageCount - 3 ? <PaginationButtonComponent sort={sort} genre={genre} query={query} page={page + 3} /> : '' }
        {page !== pageCount && pageCount !== 0 ? <PaginationButtonComponent sort={sort} genre={genre} query={query} page={pageCount} /> : '' }
      </PaginationComponent>);
  }
}

const mapStateToProps = store => ({
  pageCount: store.shows.pageCount,
});


Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
      sort: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(connect(
  mapStateToProps,
)(Pagination));
