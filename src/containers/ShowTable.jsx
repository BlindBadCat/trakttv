import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { fetchPosterIfNeeded } from '../actions';
import ShowTableBodyComponent from '../components/ShowTableBodyComponent';
import ShowTableHeaderComponent from '../components/ShowTableHeaderComponent';

const ShowTable = ({
  shows, fetchPosterAction, urls,
}) => {
  const getPosters = () => {
    const ids = shows.map(i => i.ids.tvdb);
    fetchPosterAction(ids);
  };

  const preloaderStyle = {
    position: 'absolute',
    marginLeft: '48%',
    marginTop: '10%',
  };

  const preloader = <div style={preloaderStyle}><Spinner name="ball-grid-beat" color="purple" /></div>;

  if (shows.length > 0) getPosters(shows);

  let showsWithPosters = [...shows];

  // if all urls loaded add them in each show by comparing id show.ids.tbdb and url.id
  if (urls.length === shows.length) {
    showsWithPosters = shows.map(show => ({
      ...show,
      posterUrl: urls.filter(url => url.id === show.ids.tvdb)[0].url,
    }));
  }

  return (
    <table className="table table-hover">
      <ShowTableHeaderComponent />
      { showsWithPosters.length ? <ShowTableBodyComponent shows={showsWithPosters} /> : preloader}
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
  shows: PropTypes.array.isRequired,
  fetchPosterAction: PropTypes.func.isRequired,
  urls: PropTypes.array.isRequired,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowTable);
