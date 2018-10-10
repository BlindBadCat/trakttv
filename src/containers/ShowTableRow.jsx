import React from 'react';
import PropTypes from 'prop-types';
import ShowTableRowComponent from '../components/ShowTableRowComponent';
import ShowTableCell from './ShowTableCell';
import PosterComponent from '../components/PosterComponent';

class ShowTableRow extends React.Component {
  render() {
    const { show } = this.props;
    const {
      trailer, year, rating, aired_episodes, title, posterURL,
    } = show;
    const trailerLink = trailer ? <a href={trailer}>Watch</a> : <p>No Vid</p>;
    const ratingFormat = rating.toFixed(1);
    const arr = [title, ratingFormat, year, aired_episodes, trailerLink];
    return (
      <ShowTableRowComponent>
        <PosterComponent posterURL={posterURL} />
        {arr.map((cell, i) => <ShowTableCell key={`${title}_cell_${i}`} content={cell} />)}
      </ShowTableRowComponent>
    );
  }
}

ShowTableRow.propTypes = {
  show: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    aired_episodes: PropTypes.number.isRequired,
    trailer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowTableRow;
