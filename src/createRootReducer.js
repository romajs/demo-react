import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import application from './application/reducer';
import auth from './features/auth/reducer';

export default history => combineReducers({
  application,
  auth,
  router: connectRouter(history),
});
