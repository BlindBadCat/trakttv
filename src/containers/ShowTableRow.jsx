import React from 'react';
import { connect } from 'react-redux';
import ShowTableRowComponent from '../components/ShowTableRowComponent';
import ShowTableCell from './ShowTableCell';
import { fetchPoster } from '../actions';
import Poster from './Poster';

class ShowTableRow extends React.Component {
  render() {
    const {
      trailer, year, rating, aired_episodes, title, ids, posterUrl
    } = this.props.show.show;
    const trailerLink = trailer ? <a href={trailer}>Watch</a> : <p>No Vid</p>;
    const { tvdb } = ids;
    const ratingFormat = rating.toFixed(1);
    const arr = [title, ratingFormat, year, aired_episodes, trailerLink];
    return (
      <ShowTableRowComponent>
        <Poster tvdb={tvdb} url={posterUrl}/>
        {arr.map(cell => <ShowTableCell content={cell} />)}
      </ShowTableRowComponent>
    );
  }
}


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  fetchPosterAction: id => dispatch(fetchPoster(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowTableRow);
