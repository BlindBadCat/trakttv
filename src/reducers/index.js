import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shows from './shows';

const rootReducer = combineReducers({
  routerReducer,
  shows,
});

export default rootReducer;
