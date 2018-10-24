/* eslint-disable import/no-duplicates */
import deepFreeze from 'deep-freeze';
import shows from '../../src/reducers/shows';
import C from '../../src/constants/index';
import { initialState } from '../../src/reducers/shows';

describe('Tests for shows reducer', () => {
  it('should return the initial state', () => {
    const action = {};
    deepFreeze(initialState);
    deepFreeze(action);
    expect(shows(undefined, action)).toMatchSnapshot();
  });

  it('should handle wrong actions', () => {
    const action = { type: 'WRONG_ACTION', payload: { asd: 123 } };
    deepFreeze(initialState);
    expect(shows({ ...initialState }, action)).toMatchSnapshot();
  });

  it('should handle FETCH_SHOWS_REQUEST', () => {
    const action = { type: C.FETCH_SHOWS_REQUEST };
    deepFreeze(initialState);
    deepFreeze(action);
    expect(shows(initialState, action)).toMatchSnapshot();
  });

  it('should handle FETCH_SHOWS_ERROR', () => {
    const action = { type: C.FETCH_SHOWS_ERROR, payload: 'some error' };
    deepFreeze(initialState);
    deepFreeze(action);
    expect(shows(initialState, action)).toMatchSnapshot();
  });

  it('should handle FETCH_SHOWS_SUCCESS', () => {
    const action = {
      type: C.FETCH_SHOWS_SUCCESS,
      payload: {
        shows: [
          { someValue: 1, show: { title: 'show1' } },
          { someValue: 2, show: { title: 'show2' } },
          { someValue: 3, show: { title: 'show3' } },
          { someValue: 4, show: { title: 'show4' } },
        ],
        pagination: {
          sort: 'shows/watched/all',
          query: '',
          genre: '',
          pageCount: 4000,
          limit: 10,
          currentPage: 1,
          itemCount: 40000,
        },
      },
    };
    const state = { ...initialState, isFetching: true };
    deepFreeze(action);
    deepFreeze(state);
    expect(shows(state, action)).toMatchSnapshot();
  });

  it('should handle CHANGE_URL_PARAMS', () => {
    const state = { ...initialState, currentPage: 1 };
    const action = {
      type: C.CHANGE_URL_PARAMS,
      payload: { currentPage: 5 },
    };
    deepFreeze(action);
    deepFreeze(state);
    expect(shows(state, action)).toMatchSnapshot();
  });
});
