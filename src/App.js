import './App.css'
import HelloMessage from './components/HelloMessage'
import logo from './logo.svg'
import React, { Component } from 'react'

class App extends Component {
  render () {
    return [
      <HelloMessage key={0} name='world' />,
      <logo key={1} />
    ]
  }
}

export default App
