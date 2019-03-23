import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { Header } from '../misc/Header'
import { fakeAuth } from '../../auth'

export const LoginPage = ({ history }) => (
  <React.Fragment>
    <Header />
    <hr />
    <h1>LoginPage</h1>
    <p>isAuthenticated={fakeAuth.isAuthenticated.toString()}</p>
    <div>
      <button onClick={() => fakeAuth.login(() => history.push('/private'))}>
        Login
      </button>
    </div>
  </React.Fragment>
)

LoginPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}
