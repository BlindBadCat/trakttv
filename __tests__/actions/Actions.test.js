import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import C from '../../src/constants';
import * as actions from '../../src/actions';
import * as types from '../../src/constants';
import sample from '../../src/actions/samples/shows';
import { initialState } from '../../src/reducers/shows';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('fetchs data from traktTV', () => {
    fetchMock.getOnce('*', {...sample});
    const expectedActions = [
      { type: C.FETCH_SHOWS_REQUEST },
      {
        type: C.FETCH_SHOWS_SUCCESS,
        payload: {
          shows: { ...sample },
          pagination: {
            pageCount: 4000,
            limit: 10,
            currentPage: 1,
            itemCount: 40000,
          },
        },
      },
    ];
    const store = mockStore({...initialState});​
    return store.dispatch(actions.fetchShows()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
});
