import React from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';

const ENTER_KEY = 13;

@inject('todoStore')
@observer
class TodoEntry extends React.Component{
  @computed get todoStore() {
    return this.props.todoStore;
  }

  handleKeyDown = (e) => {
    if (e.keyCode !== ENTER_KEY) {
      return;
    }
    e.preventDefault();
    const val = e.target.value;
    if (val) {
      this.todoStore.addTodo(val);
      e.target.value = '';
    }
  };

  render() {
    return <input
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={this.handleKeyDown}
      autoFocus={true}
    />
  }
}

export default TodoEntry;