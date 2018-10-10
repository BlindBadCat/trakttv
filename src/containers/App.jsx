import React from 'react';
import PropTypes from 'prop-types';
import ShowTableBody from './ShowTableBody';
import Head from '../components/Head';
import Categories from './Categories';
import Search from './Search';
import Sort from './Sort';
import Pagination from './Pagination';
import ShowTableHeaderComponent from '../components/ShowTableHeaderComponent';
import Body from '../components/Body';

class App extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <Categories />
          <Sort />
          <Pagination />
          <Search />
        </Head>
        <Body>
          <ShowTableHeaderComponent />
          <ShowTableBody />
        </Body>
      </div>

    );
  }
}

export default App;
