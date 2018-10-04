import React from 'react';
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
  return (
    <div>
      <PaginationContainer handleClick={onClickHandler} pagination={pagination} />
    </div>
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
)(Pagination);
