import React from 'react';
import { Icon, Button, Input } from 'antd';
import './index.css';

export default class TodoList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      finished: true
    }
  }
  doDelete = () => {
    console.log('删除操作');
  }
  render () {
    return (
      <div className='todo-list-container'>
        <h1>todos</h1>
        <div className='todo-list-content'>
          <h2>what need to be done?</h2>
          <div className='todo-list-item'>
            <a>
              <Icon type="heart" theme={this.state.finished ? 'filled' : 'outlined'}/>
            </a>
            <div className="todo-list-input">
              {/* <span>这里是测试</span> */}
              <Input placeholder="Basic usage" size="large"/>
            </div>
            <a onClick={this.doDelete}>
              <Icon type="delete" theme="outlined" />
            </a>
          </div>
          <Button type="dashed" block> <Icon type="plus" theme="outlined" /> 新增 </Button>
        </div>
      </div>
    )
  }
}