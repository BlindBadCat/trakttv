import React from 'react';
import PropTypes from 'prop-types';


const Poster = ({ url }) => (url ? <td><img style={{ width: 90 }} src={url} alt="poster" /></td> : <td>Loading...</td>);

Poster.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Poster;
