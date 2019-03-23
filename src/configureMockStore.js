import configureStore from 'redux-mock-store'
import reduxThunk from 'redux-thunk'

export const mockStore = configureStore([reduxThunk])
