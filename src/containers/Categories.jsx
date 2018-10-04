import React from 'react';
import { connect } from 'react-redux';
import { fetchShowsIfNeeded, resetForNewFetch, resetPostersForPagination } from '../actions';
import CategoriesContainer from '../components/CategoriesContainer';

const Categories = ({
  urlParams, resetForNewFetchAction, fetchShowsIfNeededAction, resetPostersForPaginationAction,
}) => {
  const handleSelect = (value) => {
    const genre = `&genres=${value}`;
    const newParams = { ...urlParams, genre };
    resetForNewFetchAction();
    resetPostersForPaginationAction();
    fetchShowsIfNeededAction(newParams);
  };

  return (
    <CategoriesContainer handleSelect={handleSelect} />
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
)(Categories);
