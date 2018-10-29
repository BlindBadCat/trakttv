import C from '../constants';

export const addShows = (shows, pagination) => ({
  type: C.FETCH_SHOWS_SUCCESS,
  payload: {
    shows,
    pagination,
  },
});

export const fetchShowsRequest = () => ({
  type: C.FETCH_SHOWS_REQUEST,
});

export const fetchShowsError = error => ({
  type: C.FETCH_SHOWS_ERROR,
  payload: error,
});

export const fetchShowsWithSaga = payload => ({
  type: 'FETCH_SHOWS_WITH_SAGA',
  payload,
});
