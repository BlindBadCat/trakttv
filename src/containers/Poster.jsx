import React from 'react';
import { connect } from 'react-redux';
import PosterComponent from '../components/PosterComponent';
import { fetchPoster } from '../actions';

class Poster extends React.Component {
  fetchPosterF() {
    const { tvdb } = this.props;
    const { fetchPosterAction } = this.props;
    fetchPosterAction(tvdb);
  }

  componentDidMount() {
    this.fetchPosterF();
  }

  componentDidUpdate(prevProps) {
    const { tvdb } = this.props;
    if (tvdb !== prevProps.tvdb) this.fetchPosterF();
  }

  render() {
    const { tvdb } = this.props;
    let url;
    const { shows } = this.props;
    shows.forEach((show) => { if (show.show.ids.tvdb === tvdb) url = show.show.posterURL; });
    console.log(url);

    return <PosterComponent url={url} />;
  }
}


const mapStateToProps = store => ({
  shows: store.shows.shows,
});

const mapDispatchToProps = dispatch => ({
  fetchPosterAction: id => dispatch(fetchPoster(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Poster);
