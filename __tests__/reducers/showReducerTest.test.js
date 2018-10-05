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
    expect(shows(undefined, action)).toEqual(initialState);
  });

  it('Should handle wrong action', () => {
    const action = { type: C.GET_POSTER_URL_ADN_ID };
    const state = { ...initialState };
    const result = { ...initialState };
    expect(shows(state, action)).toEqual(result);
  });

  it('should handle GET_SHOWS_REQUEST', () => {
    const action = { type: C.GET_SHOWS_REQUEST };
    const result = { ...initialState, isFetching: true };
    deepFreeze(initialState);
    deepFreeze(action);
    expect(shows(initialState, action)).toEqual(result);
  });

  it('should hande GET_SHOWS_ERROR', () => {
    const action = { type: C.GET_SHOWS_ERROR, payload: 'some error' };
    const result = { ...initialState };
    deepFreeze(initialState);
    deepFreeze(action);
    expect(shows(initialState, action)).toEqual(result);
  });

  it('should hande RESET_SHOWS_FOR_PAGINATION', () => {
    const state = {
      isFetching: true,
      shows: [{}, {}, {}, {}],
      urlParams: {
        searchUrl: 'shows/watched/all',
        query: '',
        genre: '',
        pagination: {
          pageCount: 15,
          limit: 10,
          currentPage: 10,
          itemCount: 150,
        },
      },
    };

    const action = { type: C.RESET_SHOWS_FOR_PAGINATION };

    const result = {
      isFetching: false,
      shows: [],
      urlParams: {
        searchUrl: 'shows/watched/all',
        query: '',
        genre: '',
        pagination: {
          pageCount: 15,
          limit: 10,
          currentPage: 10,
          itemCount: 150,
        },
      },
    };

    deepFreeze(state);
    deepFreeze(action);
    expect(shows(state, action)).toEqual(result);
  });

  it('should handle ADD_SHOWS if they are present', () => {
    const action = {
      type: C.ADD_SHOWS,
      payload: {
        shows: [
          { someValue: 1, show: { title: 'show1' } },
          { someValue: 2, show: { title: 'show2' } },
          { someValue: 3, show: { title: 'show3' } },
          { someValue: 4, show: { title: 'show4' } },
        ],
        urlParams: {
          searchUrl: 'shows/watched/all',
          query: '',
          genre: '',
          pagination: {
            pageCount: 4000,
            limit: 10,
            currentPage: 1,
            itemCount: 40000,
          },
        },
      },
    };

    const result = {
      isFetching: true,
      shows: [
        { title: 'show1' },
        { title: 'show2' },
        { title: 'show3' },
        { title: 'show4' },
      ],
      urlParams: {
        searchUrl: 'shows/watched/all',
        query: '',
        genre: '',
        pagination: {
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
    expect(shows(state, action)).toEqual(result);
  });

});
