import React from 'react';
import { connect } from 'react-redux';
import { fetchShowsIfNeeded, resetForNewFetch, resetPostersForPagination } from '../actions';
import SortComponent from '../components/SortComponent/SortComponent';


const Sort = ({
  urlParams, resetForNewFetchAction, fetchShowsIfNeededAction, resetPostersForPaginationAction,
}) => {
  const handleSelect = (value) => {
    const searchUrl = `shows/${value}/all`;
    const newParams = { ...urlParams, searchUrl };
    resetForNewFetchAction();
    resetPostersForPaginationAction();
    fetchShowsIfNeededAction(newParams);
  };


  return (
    <SortComponent handleSelect={handleSelect} />
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
)(Sort);
