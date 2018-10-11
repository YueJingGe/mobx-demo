import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
