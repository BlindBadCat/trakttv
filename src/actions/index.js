import fetch from 'cross-fetch';
import C from '../constants';

const traktTVClientID = '127b74187bd5bc054477b5180794f87b02aa785b0a17e0476406a547fd1bda64';
const fanartTVClientID = 'a724beb35e84d4ff20154856b6ef2a99';

const headersForTraktTV = {
  'Content-Type': 'application/json',
  'trakt-api-version': '2',
  'trakt-api-key': traktTVClientID,
};

const traktTVfetchInit = {
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

export const addShows = (shows, urlParams) => ({
  type: C.ADD_SHOWS,
  payload: {
    shows,
    urlParams,
  },
});

const shouldFetchMovies = state => !state.shows.isFetching;

const getShowsRequest = () => ({
  type: C.GET_SHOWS_REQUEST,
});

const fetchShowsError = error => ({
  type: C.GET_SHOWS_ERROR,
  payload: error,
});

export function resetForNewFetch() {
  return {
    type: C.RESET_SHOWS_FOR_PAGINATION,
  };
}

export const fetchShows = urlParams => (dispatch) => {
  const {
    searchUrl, pagination, query, genre,
  } = urlParams;
  const { currentPage, limit } = pagination;
  const urlForTraktTVFetch = `https://api.trakt.tv/${searchUrl}?extended=full&page=${currentPage}&limit=${limit}${query}${genre}`;
  dispatch(getShowsRequest());
  let newPagination;
  return fetch(urlForTraktTVFetch, traktTVfetchInit)
    .then((response) => {
      newPagination = getPaginationFromFetchHeaders(response.headers.map);
      return response.json();
    })
    .catch(error => dispatch(fetchShowsError(error)))
    .then(json => dispatch(addShows(json, { ...urlParams, pagination: { ...newPagination } })));
};
export function resetPostersForPagination() {
  return {
    type: C.RESET_FOR_NEW_FETCH,
  };
}


export function fetchShowsIfNeeded(urlParams) {
  return (dispatch, getState) => {
    if (shouldFetchMovies(getState())) {
      return dispatch(fetchShows(urlParams));
    }
  };
}

const shouldFetchPoster = state => !state.poster.isFetching;

const getPosterRequest = () => ({
  type: C.GET_POSTER_URL_REQUEST,
});

const getPosterUrl = (url, id) => ({
  type: C.GET_POSTER_URL_ADN_ID,
  payload: { id, url },
});

const fetchPoster = ids => (dispatch) => {
  dispatch(getPosterRequest());
  const len = ids.length;
  for (let i = 0; i < len; i += 1) {
    const fanartShowURL = `https://webservice.fanart.tv/v3/tv/${ids[i]}?api_key=${fanartTVClientID}`;
    fetch(fanartShowURL)
      .then(response => response.json())
      .then((json) => {
        const posterURL = json.tvposter ? json.tvposter[0].url : 'https://www.classicposters.com/images/nopicture.gif';
        return dispatch(getPosterUrl(posterURL, ids[i]));
      });
  }
};

export function fetchPosterIfNeeded(ids) {
  return (dispatch, getState) => {
    if (shouldFetchPoster(getState())) {
      return dispatch(fetchPoster(ids));
    }
  };
}
