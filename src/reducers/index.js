import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import board from './board';
import notify from './notify';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  board,
  notify
});

export default rootReducer;
