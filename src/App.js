import './App.css'
import HelloMessage from './components/HelloMessage'
import logo from './logo.svg'
import React, { Component } from 'react'
import TimerInSeconds from './components/TimerInSeconds'
import TodoApp from './components/TodoApp'
import MarkdownEditor from './MarkdownEditor'

class App extends Component {
  render () {
    return [
      <HelloMessage key={0} name='world' />,
      <logo key={1} />,
      <TimerInSeconds key={3} />,
      <TodoApp key={4} />,
      <MarkdownEditor key={5} />
    ]
  }
}

export default App
