import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import application from './features/application/reducer'

export default history => combineReducers({
  router: connectRouter(history),
  application
})
