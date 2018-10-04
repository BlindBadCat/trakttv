import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

Categories.propTypes = {
  urlParams: PropTypes.shape({
    pagination: PropTypes.shape({
      pageCount: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
      itemCount: PropTypes.number.isRequired,
    }),
    searchUrl: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
  }).isRequired,
  resetForNewFetchAction: PropTypes.func.isRequired,
  fetchShowsIfNeededAction: PropTypes.func.isRequired,
  resetPostersForPaginationAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
