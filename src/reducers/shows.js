import C from '../constants';

export const initialState = {
  isFetching: false,
  shows: [],
  sort: 'shows/watched/all',
  query: '',
  genre: '',
  pageCount: 5,
  limit: 10,
  currentPage: 1,
  itemCount: 10,
};

const shows = (state = initialState, { type, payload }) => {
  switch (type) {
    case C.FETCH_SHOWS_REQUEST:
      return { ...state, isFetching: true };
    case C.FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        shows: [...payload.shows],
        ...payload.pagination,
        isFetching: false,
      };
    case C.FETCH_SHOWS_ERROR:
      console.log(payload);
      return { ...state };
    case C.CHANGE_URL_PARAMS:
      return { ...state, ...payload };
    case C.ADD_POSTER_URL:
      return {
        ...state,
        shows: state.shows.map(
          show => (
            show.show.ids.tvdb === payload.id ?
              { ...show,show: {...show.show, posterURL: payload.url }} : show)),
      };
    default: return state;
  }
};

export default shows;
