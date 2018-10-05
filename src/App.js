import React, {Component} from 'react';
import logo from './logo.svg';
import SubmissionForm from './forms/SubmissionForm'
//import UserNamePassword from './forms/UserNamePassword'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SubmissionForm/>
      </div>
    );
  }
}

export default App;



