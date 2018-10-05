/* eslint-disable import/no-duplicates */
import deepFreeze from 'deep-freeze';
import poster from '../../src/reducers/poster';
import C from '../../src/constants/index';
import { initialState } from '../../src/reducers/poster';

describe('Test for poster reducer', () => {

  it('Should return the initial state', () => {
    const action = {};
    const result = { ...initialState };
    deepFreeze(action);
    expect(poster(undefined, action)).toEqual(result);
  });

  it('Should handle wrong action', () => {
    const action = { type: C.GET_SHOWS_REQUEST };
    const state = { ...initialState };
    const result = { ...initialState };
    expect(poster(state, action)).toEqual(result);
  });

  it('should handle GET_POSTER_URL_REQUEST', () => {
    const action = { type: C.GET_POSTER_URL_REQUEST };
    const result = { ...initialState, isFetching: true };
    deepFreeze(action);
    expect(poster({ ...initialState }, action)).toEqual(result);
  });

  it('should handle RESET_FOR_NEW_FETCH', () => {
    const action = { type: C.RESET_FOR_NEW_FETCH };
    const result = { ...initialState };
    const state = {
      urls: ['some Url 0', 'some Url 1', 'some Url 2'],
      isFetching: true,
    };
    deepFreeze(action);
    expect(poster(state, action)).toEqual(result);
  });

  it('should handle POSTER_URL_ERROR', () => {
    const action = { type: C.RESET_FOR_NEW_FETCH };
    const result = { ...initialState };
    const state = {
      urls: ['some Url 0', 'some Url 1', 'some Url 2'],
      isFetching: true,
    };
    deepFreeze(action);
    expect(poster(state, action)).toEqual(result);
  });

  it('should handle GET_POSTER_URL_AND_ID', () => {
    const state = {
      urls: [{ id: 23, url: 'someurl1!' }],
      isFetching: true,
    };
    const action = {
      type: C.GET_POSTER_URL_ADN_ID,
      payload: { id: 123, url: 'someurl2!' },
    };
    const result = { ...state, urls: [{ id: 23, url: 'someurl1!' }, { id: 123, url: 'someurl2!' }] };
    deepFreeze(action);
    deepFreeze(state);
    expect(poster(state, action)).toEqual(result);
  });
});
