/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const storeFactory = (initialState = {}) => (
  applyMiddleware(thunk, logger)(createStore)(rootReducer, initialState));


export default storeFactory;
