import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShowTableBody from './ShowTableBody';
import Head from '../components/Head';
import CategoriesContainer from '../components/CategoriesContainer';
import Search from './Search';
import SortComponent from '../components/SortComponent';
import Pagination from './Pagination';
import ShowTableHeaderComponent from '../components/ShowTableHeaderComponent';
import Body from '../components/Body';
import { changeURLParams, fetchShows } from '../actions';
import ShowDescriptionComponent from '../components/ShowDescriptionComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    const { id } = e.target;
    const { value } = e.target;
    const { changeURLParamsAction } = this.props;
    let payload;
    switch (id) {
      case 'selectGenre':
        payload = `&genres=${value}`;
        changeURLParamsAction({ genre: payload, currentPage: 1 });
        break;
      case 'selectSort':
        payload = `shows/${value}/all`;
        changeURLParamsAction({ sort: payload });
        break;
      default:
        changeURLParamsAction({});
    }
  }

  render() {
    const { fetchShowsAction } = this.props;
    return (
      <div>
        <ShowDescriptionComponent />
        <Head>
          <CategoriesContainer handleSelect={this.handleSelect} />
          <SortComponent handleSelect={this.handleSelect} />
          <Pagination />
          <Search />
        </Head>
        <Body>
          <ShowTableHeaderComponent />
          <ShowTableBody fetchShowsAction={fetchShowsAction} />
        </Body>
      </div>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  changeURLParamsAction: param => dispatch(changeURLParams(param)),
  fetchShowsAction: () => dispatch(fetchShows()),
});

App.propTypes = {
  changeURLParamsAction: PropTypes.func.isRequired,
  fetchShowsAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
