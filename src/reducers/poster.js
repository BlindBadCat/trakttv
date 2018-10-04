import C from '../constants';

const initialState = {
  isFetching: false,
  urls: [],
};

const poster = (state = initialState, { type, payload }) => {
  switch (type) {
    case C.GET_POSTER_URL_REQUEST:
      return { ...state, isFetching: true };
    case C.GET_POSTER_URL_ADN_ID:
      return { ...state, urls: [...state.urls, payload] };
    case C.GET_POSTERS_URL_SUCCESS:
      return { ...state, urls: [...state.urls, ...payload] };
    case C.RESET_FOR_NEW_FETCH:
      return { isFetching: false, urls: [] };
    case C.GET_POSTER_URL_ERROR:
      console.log(payload);
      return { ...state };
    default: return state;
  }
};


export default poster;
