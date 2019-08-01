import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'July'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
       <UserInput 
       changed={this.usernameChangedHandler}
       currentName={this.state.username} />
       <UserOutput userName= {this.state.username} />
       <UserOutput userName="Jane" />
       <UserOutput userName="Jane" />
      </div>
    );
  }
}

export default App;