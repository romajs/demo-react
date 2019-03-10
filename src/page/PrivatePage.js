import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { Header } from '../component/Header'
import { fakeAuth } from '../auth'

export const PrivatePage = ({ history }) => (
  <React.Fragment>
    <Header />
    <hr />
    <h1>Private</h1>
    <p>isAuthenticated={fakeAuth.isAuthenticated.toString()}</p>
    <div>
      <button onClick={() => fakeAuth.logout(() => history.push('/home'))}>
        Logout
      </button>
    </div>
  </React.Fragment>
)

PrivatePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}
