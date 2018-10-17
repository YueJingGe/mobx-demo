import React from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import TodoItem from './TodoItem';
import { ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

@inject('todoStore', 'viewStore')
@observer
class TodoList extends React.Component{
  @computed get todoStore() {
    return this.props.todoStore;
  }

  @computed get viewStore() {
    return this.props.viewStore;
  }

  getVisibleTodos = () => {
    return this.todoStore.todos.filter(todo => {
      switch (this.viewStore.todoFilter) {
        case ACTIVE_TODOS:
          return !todo.completed;
        case COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
      }
    });
  }
  render() {
    return(
      <section className="main">
        <ul className="todo-list">
          {this.getVisibleTodos().map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </section>
    )
  }
}

export default TodoList;