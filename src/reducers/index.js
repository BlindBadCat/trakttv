import { combineReducers } from 'redux';
import shows from './shows';
import poster from './poster';

const rootReducer = combineReducers({
  shows,
  poster,
});

export default rootReducer;
