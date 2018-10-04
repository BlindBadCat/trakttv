import shows from '../src/reducers/shows';
import C from '../src/constants';
import { initialState } from '../src/reducers/shows';

describe('Tests for shows reducer', () => {
  it('should return the initial state', () => {
    const action = {};
    expect(shows(undefined, action)).toEqual(initialState);
  });

  it('should handle GET_SHOWS_REQUEST', () => {
    const action = { type: C.GET_SHOWS_REQUEST };
    const result = { ...initialState, isFetching: true };
    expect(shows(initialState, action)).toEqual(result);
  });

  it('should hande GET_SHOWS_ERROR', () => {
    const action = { type: C.GET_SHOWS_ERROR, payload: 'some error' };
    const result = { ...initialState };
    expect(shows(initialState, action)).toEqual(result);
  });
});
