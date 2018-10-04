import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShowsIfNeeded, resetForNewFetch, resetPostersForPagination } from '../actions';
import SearchContainer from '../components/SearchContainer/SearchContainer';

const Search = ({
  resetForNewFetchAction, fetchShowsIfNeededAction, resetPostersForPaginationAction, urlParams,
}) => {
  const handleSubmit = (value) => {
    const query = `&query=${value}`;
    const newParams = {
      ...urlParams, query, genre: '', pagination: { ...urlParams.pagination, currentPage: 1 },
    };
    resetForNewFetchAction();
    resetPostersForPaginationAction();
    fetchShowsIfNeededAction(newParams);
  };


  return (
    <SearchContainer handleSubmit={handleSubmit} />

  );
};

const mapStateToProps = store => ({
  urlParams: store.shows.urlParams,
});

const mapDispatchToProps = dispatch => ({
  fetchShowsIfNeededAction: urlParams => dispatch(fetchShowsIfNeeded(urlParams)),
  resetForNewFetchAction: () => dispatch(resetForNewFetch()),
  resetPostersForPaginationAction: () => dispatch(resetPostersForPagination()),
});

Search.propTypes = {
  urlParams: PropTypes.shape({
    pagination: PropTypes.shape({
      pageCount: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
      itemCount: PropTypes.number.isRequired,
    }),
    searchUrl: PropTypes.string.isRequired,
  }).isRequired,
  resetForNewFetchAction: PropTypes.func.isRequired,
  fetchShowsIfNeededAction: PropTypes.func.isRequired,
  resetPostersForPaginationAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

// noinspection BadExpressionStatementJS
