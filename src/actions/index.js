import fetch from 'cross-fetch';
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

const addShows = (shows, pagination) => ({
  type: C.FETCH_SHOWS_SUCCESS,
  payload: {
    shows,
    pagination,
  },
});

export const fetchShowsRequest = () => ({
  type: C.FETCH_SHOWS_REQUEST,
});

const fetchShowsError = error => ({
  type: C.FETCH_SHOWS_ERROR,
  payload: error,
});

export const fetchPoster = id => (dispatch) => {
  const fanartPosterURL = `https://webservice.fanart.tv/v3/tv/${id}?api_key=${fanartTVClientID}`;
  return fetch(fanartPosterURL)
    .then(response => response.json())
    .then((json) => {
      // if request are bad, or there is no TV poster in their base return default url
      const defaultURL = 'https://www.classicposters.com/images/nopicture.gif';
      return json.tvposter ? json.tvposter[0].url : defaultURL;
    });
};

export const fetchShows = () => (dispatch, getState) => {
  const {
    sort, query, genre, currentPage, limit,
  } = getState().shows;
  const urlForTraktTVFetch = `https://api.trakt.tv/${sort}?extended=full&page=${currentPage}&limit=${limit}${query}${genre}`;
  let newPagination;

  dispatch(fetchShowsRequest());

  return fetch(urlForTraktTVFetch, traktTVFetchInit)
    .then((response) => {
      // we need pagination headers to be dispatched later in store
      newPagination = getPaginationFromFetchHeaders(response.headers.map);
      return response.json();
    })
    .catch(error => dispatch(fetchShowsError(error)))
    /* after shows loaded fetch posters and add them to show,
     Promise.all saves the order of posters for each show
    */
    .then((json) => {
      const ids = json.map(show => show.show.ids.tvdb); // array with id of each show
      const urls = Promise.all(ids.map(id => dispatch(fetchPoster(id)))); // fetching posters
      urls.then((data) => {
        // adding posters to each show
        const shows = json.map((showWithInfo, i) => (
          {
            ...showWithInfo,
            show: { ...showWithInfo.show, posterURL: data[i] },
          }
        ));
        dispatch(addShows(shows, newPagination));
      });
    });
};

export const changeURLParams = newParams => ({
  type: C.CHANGE_URL_PARAMS,
  payload: newParams,
});
