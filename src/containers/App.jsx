import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchShowsIfNeeded } from '../actions';
import Head from '../components/Head';
import Buttons from './Buttons';
import MoviesList from './ShowTable';
import PageNotFound404 from '../components/PageNotFound404';


const App = ({ fetchShowsIfNeededAction, urlParams }) => {
  const getUpdate = () => {
    fetchShowsIfNeededAction(urlParams);
  };

  getUpdate();

  return (
    <div>
      <Head />
      <Buttons />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MoviesList} />
          <Route component={PageNotFound404} />
        </Switch>
      </BrowserRouter>

    </div>

  );
};

App.propTypes = {
  fetchShowsIfNeededAction: PropTypes.func.isRequired,
  urlParams: PropTypes.shape({
    pagination: PropTypes.shape({
      pageCount: PropTypes.number.isRequired,
      limit: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
      itemCount: PropTypes.number.isRequired,
    }),
    searchUrl: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
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
