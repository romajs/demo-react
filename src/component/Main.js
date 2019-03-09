import React, { Component, Fragment } from 'react'

import { HelloMessage } from './HelloMessage'
import { MarkdownEditor } from './MarkdownEditor'
import { TimerInSeconds } from './TimerInSeconds'
import { TodoApp } from './TodoApp'

export class Main extends Component {
  render () {
    return (
      <Fragment>
        <HelloMessage name='World' />
        <TimerInSeconds />
        <TodoApp />
        <MarkdownEditor />
      </Fragment>
    )
  }
}

Main.propTypes = {
}

Main.defaultProps = {
}
