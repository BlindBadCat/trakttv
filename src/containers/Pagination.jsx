import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShowsIfNeeded, resetForNewFetch, resetPostersForPagination } from '../actions';
import PaginationContainer from '../components/PaginationContainer/PagintaionContainer';

const Pagination = ({
  fetchShowsIfNeededAction, resetForNewFetchAction, urlParams, resetPostersForPaginationAction,
}) => {
  const onClickHandler = (currentPage) => {
    const newParams = { ...urlParams, pagination: { ...urlParams.pagination, currentPage } };
    resetPostersForPaginationAction();
    resetForNewFetchAction();
    fetchShowsIfNeededAction(newParams);
  };
  const { pagination } = urlParams;
  return <PaginationContainer handleClick={onClickHandler} pagination={pagination} />;
};

const mapStateToProps = store => ({
  urlParams: store.shows.urlParams,
});

const mapDispatchToProps = dispatch => ({
  fetchShowsIfNeededAction: urlParams => dispatch(fetchShowsIfNeeded(urlParams)),
  resetForNewFetchAction: () => dispatch(resetForNewFetch()),
  resetPostersForPaginationAction: () => dispatch(resetPostersForPagination()),
});

Pagination.propTypes = {
  urlParams: PropTypes.shape({
    pagination: PropTypes.shape({
      pageCount: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
      itemCount: PropTypes.number.isRequired,
    }),
    searchUrl: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  resetForNewFetchAction: PropTypes.func.isRequired,
  fetchShowsIfNeededAction: PropTypes.func.isRequired,
  resetPostersForPaginationAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
