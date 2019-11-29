import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
<<<<<<< HEAD

const rootReducer = history => combineReducers({
  router: connectRouter(history)
=======
import notify from './notify';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  notify
>>>>>>> develop
});

export default rootReducer;
