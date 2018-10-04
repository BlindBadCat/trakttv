import React from 'react';
import Spinner from 'react-spinkit';

const Poster = ({ url }) => (url ? <img style={{ width: 90 }} src={url} alt="poster" /> : <Spinner name="circle" color="purple" />);

export default Poster;
