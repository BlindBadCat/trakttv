import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import SearchContainer from '../components/SearchContainer';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(this.props.location)
    console.log(this.props.history)
    this.props.location.pathname =`watched/all/1/${e.target.value}`;
  }

  render() {
    return (
      <SearchContainer handleInput={this.handleInput} />
    );
  }
}


Search.propTypes = {

};

export default withRouter(Search);
