import React from 'react';
import PropTypes from 'prop-types';

const PosterComponent = ({ posterURL }) => (posterURL ? <td><img style={{ width: 90 }} src={posterURL} alt="poster" /></td> : <td>Loading...</td>);

PosterComponent.propTypes = {
  posterURL: PropTypes.string.isRequired,
};

export default PosterComponent;
