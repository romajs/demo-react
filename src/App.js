import './App.css'
import HelloMessage from './components/HelloMessage'
import logo from './logo.svg'
import React, { Component } from 'react'
import TimerInSeconds from './components/TimerInSeconds'

class App extends Component {
  render () {
    return [
      <HelloMessage key={0} name='world' />,
      <logo key={1} />,
      <TimerInSeconds key={3} />
    ]
  }
}

export default App
