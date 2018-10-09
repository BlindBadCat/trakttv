import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import ShowTableBodyComponent from '../components/ShowTableBodyComponent';
import { fetchShows } from '../actions';
import ShowTableRow from './ShowTableRow';


class ShowTableBody extends React.Component {
  componentDidMount() {
    this.initial();
  }

  componentDidUpdate(prevProps) {
    const {
      query, currentPage, sort, search, genre,
    } = this.props.shows;
    if (
      query !== prevProps.shows.query
      || genre !== prevProps.shows.genre
      || search !== prevProps.shows.search
      || sort !== prevProps.shows.sort
      || currentPage !== prevProps.shows.currentPage) {
      this.initial();
    }
  }

  initial() {
    const { fetchShowsAction } = this.props;
    fetchShowsAction();
  }

  render() {
    const { shows, itemCount } = this.props.shows;
    const preloaderStyle = {
      position: 'absolute',
      marginLeft: '48%',
      marginTop: '10%',
    };
    const preloader = <div style={preloaderStyle}><Spinner name="ball-grid-beat" color="purple" /></div>;
    return (
      shows.length > itemCount % 10 - 1
        ? (
          <ShowTableBodyComponent>
            {shows.map(show => <ShowTableRow show={show} />)}
          </ShowTableBodyComponent>
        ) : preloader
    );
  }
}

const mapStateToProps = store => ({
  shows: store.shows,
  itemCount: store.shows.itemCount,
});

const mapDispatchToProps = dispatch => ({
  fetchShowsAction: () => dispatch(fetchShows()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowTableBody);
