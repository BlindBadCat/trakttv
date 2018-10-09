import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeURLParams } from '../actions';
import SearchContainer from '../components/SearchContainer';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = e.target.search;
    const { changeURLParamsAction } = this.props;
    const payload = `&query=${value}`;
    changeURLParamsAction({ query: payload });
  }

  render() {
    return (
      <SearchContainer handleSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = store => ({
  urlParams: store.shows.urlParams,
});

const mapDispatchToProps = dispatch => ({
  changeURLParamsAction: param => dispatch(changeURLParams(param)),
});

Search.propTypes = {
  changeURLParamsAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

// noinspection BadExpressionStatementJS
