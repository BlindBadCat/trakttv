import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import { fetchShowsIfNeeded } from '../actions';
import MoviesList from './ShowTable';
import Buttons from './Buttons';


const App = ({ fetchShowsAction, urlParams }) => {
  const getUpdate = () => {
    fetchShowsAction(urlParams);
  };

  getUpdate();

  return (

    <div>
      <Head />
      <Buttons />
      <MoviesList />
    </div>

  );
};
/*
App.PropTypes = {
  fetchShowsAction: PropTypes.func,

  pagination: PropTypes.shape({
    pageCount: PropTypes.number,
    limit: PropTypes.number,
    currentPage: PropTypes.number,
    itemCount: PropTypes.number,
  }),

  searchUrl: PropTypes.string,
};*/

const mapStateToProps = store => ({
  urlParams: store.shows.urlParams,
});

const mapDispatchToProps = dispatch => ({
  fetchShowsAction: (sort, page, limit) => dispatch(fetchShowsIfNeeded(sort, page, limit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
