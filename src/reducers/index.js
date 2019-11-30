import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import game from './game';
import board from './board';
import notify from './notify';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  game,
  board,
  notify
});

export default rootReducer;
