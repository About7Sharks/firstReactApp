import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  activateLasers = () => {
    console.log('this is:', this);
    alert(`Zac thinks you're cute!`)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Welcome to Zac's React App</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Although i'm more comfortable with Vue.js and use it in my day to day tasks, it's important for me to have an understand of entire state of the front-end ecosystem so I can choose the right tool for the job.</p>
          <br></br>
        <Button onClick={this.activateLasers} variant="contained" color="primary">
        Press Me
      </Button>
        </header>
      </div>
    );
  }
}

export default App;
