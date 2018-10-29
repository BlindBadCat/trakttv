import React from 'react';
import PropTypes from 'prop-types';

const Head = ({ children }) => (
  <div className="container">
    <div className="row">
      {children[0]}
      {' '}
      {children[1]}
      {' '}
    </div>
    <div className=''>
      {children[2]}
      {' '}
      {children[3]}
      {' '}
    </div>
  </div>
);

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Head;
