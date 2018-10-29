import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import ShowTableBody from './ShowTableBody';
import Head from '../components/Head';
import CategoriesContainer from './CategoriesContainer';
import Search from './Search';
import SortContainer from './SortContainer';
import Pagination from './Pagination';
import ShowTableHeaderComponent from '../components/ShowTableHeaderComponent';
import Body from '../components/Body';
import { fetchShowsWithSaga } from '../actions';
import ShowDescriptionComponent from '../components/ShowDescriptionComponent';

class App extends React.Component {
  componentDidMount() {
    this.initial();
  }

  initial() {
    const { fetchShowsWithSagaAction } = this.props;
    const { params } = this.props.match;
    const {
      page, query, genre, sort,
    } = params;
    console.log('initial');
    fetchShowsWithSagaAction({
      page, query, genre, sort,
    });
  }

  componentDidUpdate({ match }) {
    const { fetchShowsWithSagaAction } = this.props;
    const { params } = this.props.match;
    const {
      page, query, genre, sort,
    } = params;
    if (match.params.page !== page
      || match.params.query !== query
      || match.params.genre !== genre
      || match.params.sort !== sort
    ) {
      console.log('prefetch');
      fetchShowsWithSagaAction({
        page, query, genre, sort,
      });
    }
  }

  render() {
    const { fetchShowsAction } = this.props;
    console.log('app render');
    return (
      <div>
        <Head>
          <Pagination />
          <Search/>
          <CategoriesContainer />
          <SortContainer />
        </Head>
        <Body>
          <ShowTableHeaderComponent />
          <Route path="/">
            <ShowTableBody fetchShowsAction={fetchShowsAction} />
          </Route>
        </Body>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchShowsWithSagaAction: payload => dispatch(fetchShowsWithSaga(payload)),
});

App.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
