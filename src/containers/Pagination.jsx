import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeURLParams } from '../actions';
import PaginationContainer from '../components/PaginationContainer/PagintaionContainer';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    const currentPage = parseInt(e.target.id, 10);
    const { changeURLParamsAction} = this.props;
    changeURLParamsAction({ currentPage });
  }

  render() {
    const { currentPage, pageCount } = this.props;
    return (
      <PaginationContainer
        handleClick={this.onClickHandler}
        currentPage={currentPage}
        pageCount={pageCount}
      />);
  }
}

const mapStateToProps = store => ({
  currentPage: store.shows.currentPage,
  pageCount: store.shows.pageCount,
});

const mapDispatchToProps = dispatch => ({
  changeURLParamsAction: param => dispatch(changeURLParams(param)),
});

Pagination.propTypes = {
  changeURLParamsAction: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
