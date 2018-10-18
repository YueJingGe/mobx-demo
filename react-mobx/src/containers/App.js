import React from 'react';
import { Link } from 'react-router';
import './App.css';

export default class App extends React.Component{
  render() {
    return <div className="app-container">
      <header>
        <Link to="/home">首页</Link>  | 
        <Link to="/todos">待办事项</Link>
      </header>

      <hr/>
      
      {this.props.children}
    </div>
  }
}