import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { HelloMessage } from './components/HelloMessage'
import { MarkdownEditor } from './components/MarkdownEditor'
import { TimerInSeconds } from './components/TimerInSeconds'
import { TodoApp } from './components/TodoApp'
import configureStore from './store/configureStore'

const store = configureStore()

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <HelloMessage name='World' />
        <TimerInSeconds />
        <TodoApp />
        <MarkdownEditor />
      </Provider>
    )
  }
}

App.propTypes = {
}

App.defaultProps = {
}
