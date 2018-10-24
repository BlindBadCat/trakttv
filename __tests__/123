import storeFactory from '../src/store/configureStore';
import {
  fetchPosterIfNeeded,
  fetchShows,

} from '../src/actions';
import { initialState } from '../src/reducers/shows';


jest.mock('../src/actions/');

let store;

describe('store tests', () => {
  beforeAll(() => {
    store = storeFactory();
    console.log(initialState);
    console.log(store.getState());
    store.dispatch(fetchShows(initialState.urlParams));
  });

  it('should contain 10 shows', () => {
    expect(store.getState().shows.shows.length).toEqual(10);
  });
});
