import React from 'react';
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
  if (urls.length > limit - 1) {
    showsWithPosters = shows.map((show) => {

      const len = urls.length

      //for (let i = 0; i < len; i += 1){
      //  if
      //}

      urls.forEach((url) => {
        if (show.ids.tvdb === url.id) show.posterUrl = url.url
      });
      return show;
    });
  }
  const preloaderStyle = {
    position: 'absolute',
    marginLeft: '48%',
    marginTop: '10%',
  };
  const preloader = <div style={preloaderStyle}><Spinner name="ball-grid-beat" color="purple" /></div>;
  return  (
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowTable);
