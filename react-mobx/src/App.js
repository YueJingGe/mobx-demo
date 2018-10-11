import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import TodoList from './Pages/TodoList';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={TodoList} />
      </Router>
    );
  }
}

export default App;
