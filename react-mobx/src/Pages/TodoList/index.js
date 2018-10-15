import React from 'react';
import { observer, inject } from 'mobx-react';
import { Icon, Button } from 'antd';
import TodoItem from './TodoItem';
import './index.css';

@inject('todoStore')
@observer
class TodoList extends React.Component{

  render () {
    const { todos, addTodo, onPressEnter, onDoubleClick, onFinished, doDelete } = this.props.todoStore;
    
    return (
      <div className='todo-list-container'>
        <h1>todos</h1>
        <div className='todo-list-content'>
          <h2>what need to be done?</h2>
          {
            todos.map(item=>{
              if(!item.finished) {
                return <TodoItem todo={item} 
                onFinished={onFinished}
                onPressEnter={onPressEnter}
                onDoubleClick={onDoubleClick}
                doDelete={doDelete}/>
              }
            })
          }
          <Button type="dashed" block onClick={addTodo}> <Icon type="plus" theme="outlined" /> 新增 </Button>
        </div>

        <div className='todo-list-content'>
          <h2>completed task !</h2>
          {
            todos.map(item=>{
              if(item.finished) {
                return <TodoItem todo={item} 
                onFinished={onFinished}
                onPressEnter={onPressEnter}
                onDoubleClick={onDoubleClick}
                doDelete={doDelete}/>
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default TodoList;