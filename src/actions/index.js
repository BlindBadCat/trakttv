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

export const addShows = (shows, pagination) => ({
  type: C.FETCH_SHOWS_SUCCESS,
  payload: {
    shows,
    pagination,
  },
});

const fetchShowsRequest = () => ({
  type: C.FETCH_SHOWS_REQUEST,
});

const fetchShowsError = error => ({
  type: C.FETCH_SHOWS_ERROR,
  payload: error,
});

export const fetchShows = () => (dispatch, getState) => {
  if(!getState().shows.isFetching){
  const {
    sort, query, genre, currentPage, limit,
  } = getState().shows;
  const urlForTraktTVFetch = `https://api.trakt.tv/${sort}?extended=full&page=${currentPage}&limit=${limit}${query}${genre}`;
  dispatch(fetchShowsRequest());
  let newPagination;
  return fetch(urlForTraktTVFetch, traktTVFetchInit)
    .then((response) => {
      newPagination = getPaginationFromFetchHeaders(response.headers.map);
      return response.json();
    })
    .catch(error => dispatch(fetchShowsError(error)))
    .then(json => dispatch(addShows(json, newPagination)));}
};

export const changeURLParams = newParams => ({
  type: C.CHANGE_URL_PARAMS,
  payload: newParams,
});

const addPosterUrl = (url, id) => ({
  type: C.ADD_POSTER_URL,
  payload: { id, url },
});

export const fetchPoster = id => (dispatch) => {
  const fanartPosterURL = `https://webservice.fanart.tv/v3/tv/${id}?api_key=${fanartTVClientID}`;
  fetch(fanartPosterURL)
    .then(response => response.json())
    .then((json) => {
      const posterURL = json.tvposter ? json.tvposter[0].url : 'https://www.classicposters.com/images/nopicture.gif';
      return dispatch(addPosterUrl(posterURL, id));
    });
};


/*
const fetchPoster = ids => (dispatch) => {
  dispatch(getPosterRequest());
  const len = ids.length;
  for (let i = 0; i < len; i += 1) {


  }
};

*/
