import React from 'react';
import PropTypes from 'prop-types';
import ShowTableBody from './ShowTableBody';
import Head from '../components/Head';
import Categories from './Categories';
import Search from './Search';
import Sort from './Sort';
import Pagination from './Pagination';
import { changeURLParams, fetchShows } from '../actions';
import ShowTableHeaderComponent from '../components/ShowTableHeaderComponent';
import Body from "../components/Body";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <Categories />
          <Search />
          <Sort />
          <Pagination />
        </Head>
        <Body>
          <ShowTableHeaderComponent />
          <ShowTableBody />
        </Body>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeURLParamsAction: param => dispatch(changeURLParams(param)),
  fetchShowsAction: () => dispatch(fetchShows()),
});
