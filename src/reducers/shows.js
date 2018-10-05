import C from '../constants';

export const initialState = {
  isFetching: false,
  shows: [],
  urlParams: {
    searchUrl: 'shows/watched/all',
    query: '',
    genre: '',
    pagination: {
      pageCount: 5,
      limit: 10,
      currentPage: 1,
      itemCount: 10,
    },
  },
};

const shows = (state = initialState, { type, payload }) => {
  let res;
  switch (type) {
    case C.ADD_SHOWS:
      if (payload.shows) {
        res = {
          ...state,
          shows: [...payload.shows.map(i => i.show)],
          urlParams: { ...payload.urlParams, pagination: { ...payload.urlParams.pagination } },
        };
      } else {
        res = { ...state };
      }

      return res;
    case C.GET_SHOWS_REQUEST:
      return { ...state, isFetching: true };
    case C.RESET_SHOWS_FOR_PAGINATION:
      return { ...state, isFetching: false, shows: [] };
    case C.GET_SHOWS_ERROR:
      console.log(payload);
      return { ...state };
    default: return state;
  }
};

export default shows;
