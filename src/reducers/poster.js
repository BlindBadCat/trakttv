import C from '../constants';

export const initialState = {
  isFetching: false,
  urls: [],
};

const poster = (state = initialState, { type, payload }) => {
  /*switch (type) {
    case C.GET_POSTER_URL_REQUEST:
      return { ...state, isFetching: true };
    case C.GET_POSTER_URL_ADN_ID:
      return { ...state, urls: [...state.urls, payload] };
    case C.RESET_FOR_NEW_FETCH:
      return { ...initialState };
    default: return state;
  }*/
  return state;
};


export default poster;
