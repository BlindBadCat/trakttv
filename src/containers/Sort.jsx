import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeURLParams } from '../actions';
import SortComponent from '../components/SortComponent/SortComponent';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    const { value } = e.target;
    const { changeURLParamsAction } = this.props;
    const payload = `shows/${value}/all`;
    changeURLParamsAction({ sort: payload });
  }

  render() {
    return (
      <SortComponent handleSelect={this.handleSelect} />
    );
  }
}


const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  changeURLParamsAction: param => dispatch(changeURLParams(param)),
});

Sort.propTypes = {
  changeURLParamsAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort);
