import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

const Poster = ({ url }) => (
  url ? <img style={{ width: 90 }} src={url} alt="poster" /> : <Spinner name="circle" color="purple" />
);

Poster.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Poster;
