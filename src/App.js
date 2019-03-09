import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { HelloMessage } from './component/HelloMessage'
import { MarkdownEditor } from './component/MarkdownEditor'
import { TimerInSeconds } from './component/TimerInSeconds'
import { TodoApp } from './component/TodoApp'
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
