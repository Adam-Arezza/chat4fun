import React from 'react';
import ChatWindow from './components/ChatWindow'
import TextEntry from './components/TextEntry'
import socket from './socket'
import './App.css';

export class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user: undefined
    }
  }

  componentDidMount(){
    socket.on('user', user => {
      if(!this.state.user) {
        this.setState({user: user})
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user}
        <ChatWindow user={this.state.user}></ChatWindow>
        <TextEntry user={this.state.user}></TextEntry>
      </div>
    )
  }
}

export default App
