import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

import fetch from 'cross-fetch';
import * as actions from '../actions';
import C from '../constants';

const traktTVClientID = '127b74187bd5bc054477b5180794f87b02aa785b0a17e0476406a547fd1bda64';
const fanartTVClientID = 'a724beb35e84d4ff20154856b6ef2a99';

const headersForTraktTV = {
  'Content-Type': 'application/json',
  'trakt-api-version': '2',
  'trakt-api-key': traktTVClientID,
};

const traktTVFetchInit = {
  method: 'GET',
  headers: headersForTraktTV,
  Origin: 'localhost:3000',
  mode: 'cors',
};

const getPaginationFromFetchHeaders = headers => ({
  currentPage: parseInt(headers['x-pagination-page'], 10),
  pageCount: parseInt(headers['x-pagination-page-count'], 10),
  limit: parseInt(headers['x-pagination-limit'], 10),
  itemCount: parseInt(headers['x-pagination-item-count'], 10),
});

export const fetchPoster = (id) => {
  const fanartPosterURL = `https://webservice.fanart.tv/v3/tv/${id}?api_key=${fanartTVClientID}`;
  return fetch(fanartPosterURL)
    .then(response => response.json())
    .then((json) => {
      // if request are bad, or there is no TV poster in their base return default url
      const defaultURL = 'https://www.classicposters.com/images/nopicture.gif';
      return json.tvposter ? json.tvposter[0].url : defaultURL;
    });
};

function* fetchShows(action) {
  yield console.log(action);
  const { payload } = action;
  let {
    genre, page, sort, query,
  } = payload;

  // check params and decorate them for fetch

  // there is no all param in trakt api we need to empty that string if it match 'all'
  if (genre === 'all') {
    genre = '';
  } else {
    genre = `&genres=${genre}`;
  }

  if (sort !== 'watched' && sort !== 'played' && sort !== 'collected') sort = 'watched';
  sort = `shows/${sort}/all`;

  if (query) {
    query = `&query=${query}`;
  } else {
    query = '';
  }
  // construct url for fetch with params
  const urlForTraktTVFetch = `https://api.trakt.tv/${sort}?extended=full&page=${page}&limit=10${query}${genre}`;
  let newPagination;
  console.log(urlForTraktTVFetch);
  try {
    yield put(actions.fetchShowsRequest());

    const data = yield fetch(urlForTraktTVFetch, traktTVFetchInit)
      .then((response) => {
        // we need pagination headers to be dispatched later in store
        newPagination = getPaginationFromFetchHeaders(response.headers.map);
        return response.json();
      });

    /**
     * after shows loaded fetch posters and add them to show,
     * Promise.all saves the order of posters for each show
     */

    // array with id of each show
    const ids = data.map(show => show.show.ids.tvdb);
    const URLS = yield Promise.all(ids.map(id => (fetchPoster(id))));

    // adding posters to each show
    const shows = data.map((showWithInfo, i) => (
      { ...showWithInfo, show: { ...showWithInfo.show, posterURL: URLS[i] } }));

    yield put(actions.addShows(shows, newPagination));
  } catch (e) {
    yield put(actions.fetchShowsError(e));
  }
}

function* mySaga() {
  yield takeLatest('FETCH_SHOWS_WITH_SAGA', fetchShows);
}

export default mySaga;
