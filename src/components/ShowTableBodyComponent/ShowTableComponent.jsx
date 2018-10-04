import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../Poster/Poster';
/* eslint-disable camelcase */


const ShowTableComponent = ({ shows }) => (
  <tbody>

    {shows.map((show) => {
      const {
        ids, trailer, year, rating, aired_episodes, title, posterUrl,
      } = show;
      const { tvdb } = ids;
      return (
        <tr key={tvdb}>
          <td>
            <Poster url={posterUrl} />
          </td>
          <td style={{ fontSize: '40px' }}>{title}</td>
          <td style={{ fontWeight: 'bold', fontSize: '32px' }}>{rating.toFixed(1)}</td>
          <td style={{ fontWeight: 'bold', fontSize: '32px' }}>{year}</td>
          <td style={{ fontWeight: 'bold', fontSize: '32px' }}>{aired_episodes}</td>
          <td>
            {trailer ? <a href={trailer}>Watch</a> : <p>No vid</p>}
          </td>
        </tr>
      );
    })}
  </tbody>

);

ShowTableComponent.propTypes = {
  shows: PropTypes.array.isRequired,
};

export default ShowTableComponent;
