import { observable, computed } from 'mobx';
import { uuid } from '../utils';
import TodoModel from '../models/TodoModel';

class TodoStore {
  @observable todos = []; // 保存todo列表项

  @computed get activeTodoCount() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  @computed get completedCount() {
    return this.todos.length - this.activeTodoCount;
  }

  // 注意：此处传入的 this 即为 todoStore 实例的引用
  // 通过引用使得 TodoModel 有了调用 todoStore 的能力
  addTodo(title) {
    this.todos.push(new TodoModel(this, uuid(), title, false));
  }
}

export default TodoStore;