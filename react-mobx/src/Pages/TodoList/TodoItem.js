import React from 'react';
import { Icon, Input } from 'antd';

export default class TodoItem extends React.Component{
  render() {
    const { todo, onFinished, onPressEnter, onDoubleClick, doDelete } = this.props;
    return(
      <div className='todo-list-item' key={todo.id}>
        <a onClick={()=>onFinished(todo)}>
          <Icon type="heart" theme={todo.finished ? 'filled' : 'outlined'}  />
        </a>
        <div className="todo-list-input">
        {
          todo.edited ? 
            <Input placeholder="请填写" size="large" 
              defaultValue={todo.task}
              onPressEnter={(e)=>{onPressEnter(e.target.value, todo)}}/> 
            : 
            <span style={{textDecoration:todo.finished ? 'line-through' : 'none'}} 
              onDoubleClick={()=>onDoubleClick(todo)}>{todo.task}</span>
        }
        </div>
        <a onClick={()=>doDelete(todo)}>
          <Icon type="delete" theme="outlined"/>
        </a>
      </div>
    )
  }
}