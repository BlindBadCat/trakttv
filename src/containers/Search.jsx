import React from 'react';
import { connect } from 'react-redux';
import { fetchShowsIfNeeded, resetForNewFetch, resetPostersForPagination } from '../actions';
import SearchContainer from '../components/SearchContainer/SearchContainer';

const Search = ({
  resetForNewFetchAction, fetchShowsIfNeededAction, resetPostersForPaginationAction, urlParams,
}) => {
  const handleSubmit = (value) => {
    const query = `&query=${value}`;
    const newParams = { ...urlParams, query };
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

// noinspection BadExpressionStatementJS
