import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LogIn from './forms/LogIn'
import SubmissionForm from './forms/SubmissionForm'

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={LogIn} />
      <Route path="/submission-form" component={SubmissionForm} />
    </div>
  </Router>
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'))
registerServiceWorker();
