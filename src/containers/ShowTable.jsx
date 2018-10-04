import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { fetchPosterIfNeeded } from '../actions';
import ShowTableBodyComponent from '../components/ShowTableBodyComponent';
import ShowTableHeaderComponent from '../components/ShowTableHeaderComponent';

const ShowTable = ({
  shows, fetchPosterAction, urlParams, urls,
}) => {
  const getPosters = () => {
    const ids = shows.map(i => i.ids.tvdb);
    fetchPosterAction(ids);
  };
  const { pagination } = urlParams;
  const { limit } = pagination;
  if (shows.length > limit - 1) getPosters(shows);
  let showsWithPosters = [];

  // if all urls loaded add them in each show by comparing id show.ids.tbdb and url.id
  if (urls.length === shows.length) {
    showsWithPosters = shows.map(show => ({
      ...show,
      posterUrl: urls.filter(url => url.id === show.ids.tvdb)[0].url,
    }));
  }

  const preloaderStyle = {
    position: 'absolute',
    marginLeft: '48%',
    marginTop: '10%',
  };

  const preloader = <div style={preloaderStyle}><Spinner name="ball-grid-beat" color="purple" /></div>;
  return (
    <table className="table table-hover">
      <ShowTableHeaderComponent />
      { urls.length > limit - 1 ? <ShowTableBodyComponent shows={showsWithPosters} /> : preloader}
    </table>
  );
};

const mapStateToProps = store => ({
  shows: store.shows.shows,
  urlParams: store.shows.urlParams,
  urls: store.poster.urls,
});

const mapDispatchToProps = dispatch => ({
  fetchPosterAction: ids => dispatch(fetchPosterIfNeeded(ids)),
});

ShowTable.propTypes = {
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
  shows: PropTypes.shape({
    show: PropTypes.shape({
      rating: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      aired_episodes: PropTypes.number.isRequired,
      trailer: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ids: PropTypes.shape({
        tvdb: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  fetchPosterAction: PropTypes.func.isRequired,
  urls: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowTable);
