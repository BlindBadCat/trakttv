import React from 'react';
import PropTypes from 'prop-types';

const PageNotFound = ({ location }) => (
  <div style={{ textAlign: 'center' }}>
    <p className="h1">
      {' '}
PAGE
      {location.pathname}
      {' '}
NOT FOUND
    </p>
    <iframe
      src="https://giphy.com/embed/9J7tdYltWyXIY"
      width="480"
      height="404"
      title="giff"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    />
  </div>);

PageNotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageNotFound;
