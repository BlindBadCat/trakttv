import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShowsIfNeeded, resetForNewFetch, resetPostersForPagination } from '../actions';
import SortComponent from '../components/SortComponent/SortComponent';


const Sort = ({
  urlParams, resetForNewFetchAction, fetchShowsIfNeededAction, resetPostersForPaginationAction,
}) => {
  const handleSelect = (value) => {
    const searchUrl = `shows/${value}/all`;
    const newParams = {
      ...urlParams,
      searchUrl,
      pagination: { ...urlParams.pagination, currentPage: 1 },
    };
    resetForNewFetchAction();
    resetPostersForPaginationAction();
    fetchShowsIfNeededAction(newParams);
  };
  return (
    <SortComponent handleSelect={handleSelect} />
  );
};

Sort.propTypes = {
  urlParams: PropTypes.shape({
    pagination: PropTypes.shape({
      pageCount: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
      itemCount: PropTypes.number.isRequired,
    }),
    query: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  resetForNewFetchAction: PropTypes.func.isRequired,
  fetchShowsIfNeededAction: PropTypes.func.isRequired,
  resetPostersForPaginationAction: PropTypes.func.isRequired,
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
