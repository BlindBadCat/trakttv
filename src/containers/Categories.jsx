import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeURLParams } from '../actions';
import CategoriesContainer from '../components/CategoriesContainer';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    const { value } = e.target;
    const { changeURLParamsAction } = this.props;
    const payload = `&genres=${value}`;
    changeURLParamsAction({ genre: payload });
  }

  render() {
    return (
      <CategoriesContainer handleSelect={this.handleSelect} />
    );
  }
}


const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  changeURLParamsAction: param => dispatch(changeURLParams(param)),
});

Categories.propTypes = {
  changeURLParamsAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
