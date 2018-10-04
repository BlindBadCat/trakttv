import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import { fetchShowsIfNeeded } from '../actions';
import MoviesList from './ShowTable';
import Buttons from './Buttons';


const App = ({ fetchShowsIfNeededAction, urlParams }) => {
  const getUpdate = () => {
    fetchShowsIfNeededAction(urlParams);
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

App.propTypes = {
  fetchShowsIfNeededAction: PropTypes.func.isRequired,
  urlParams: PropTypes.shape({
    pagination: PropTypes.shape({
      pageCount: PropTypes.number,
      limit: PropTypes.number,
      currentPage: PropTypes.number,
      itemCount: PropTypes.number,
    }),
    searchUrl: PropTypes.string,
    query: PropTypes.string,
    genre: PropTypes.string,

  }).isRequired,
};

const mapStateToProps = store => ({
  urlParams: store.shows.urlParams,
});

const mapDispatchToProps = dispatch => ({
  fetchShowsIfNeededAction: urlParams => dispatch(fetchShowsIfNeeded(urlParams)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
