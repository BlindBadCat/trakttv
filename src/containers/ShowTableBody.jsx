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

  /*
  if there is any changes in query, currentPage, sort, genre,
  we should send new request for shows
   */

  componentDidUpdate(prevProps) {
    const {
      query, currentPage, sort, genre,
    } = this.props;
    if (
      query !== prevProps.query
      || genre !== prevProps.genre
      || sort !== prevProps.sort
      || currentPage !== prevProps.currentPage) {
      this.initial();
    }
  }

  initial() {
    const { fetchShowsAction } = this.props;
    fetchShowsAction();
  }

  render() {
    const { shows, itemCount } = this.props;
    const preloaderStyle = {
      position: 'absolute',
      marginLeft: '48%',
      marginTop: '10%',
    };
    const preloader = <div style={preloaderStyle}><Spinner name="ball-grid-beat" color="purple" /></div>;
    return (
      shows.length > (itemCount % 10) - 1
        ? (
          <ShowTableBodyComponent>
            {shows.map(showWithFullInfo => (
              <ShowTableRow
                key={showWithFullInfo.show.title}
                show={showWithFullInfo.show}
              />
            ))
            }
          </ShowTableBodyComponent>
        ) : preloader
    );
  }
}

const mapStateToProps = store => ({
  shows: store.shows.shows,
  itemCount: store.shows.itemCount,
  currentPage: store.shows.currentPage,
  query: store.shows.query,
  sort: store.shows.sort,
  genre: store.shows.genre,
});

const mapDispatchToProps = dispatch => ({
  fetchShowsAction: () => dispatch(fetchShows()),
});

ShowTableBody.propTypes = {
  fetchShowsAction: PropTypes.func.isRequired,
  shows: PropTypes.array.isRequired,
  itemCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowTableBody);
