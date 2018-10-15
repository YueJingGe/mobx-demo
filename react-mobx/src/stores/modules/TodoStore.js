import { toJS } from 'mobx';
import { observable, action } from 'mobx';
import uuid from 'node-uuid';
import { message} from 'antd';
// import { generateWord } from '../../untils/index';

class TodoStore {
  @observable todos = [
    {id: uuid.v1(), task: '吃饭', finished: true, edited: true},
    {id: uuid.v1(), task: '睡觉', finished: false, edited: false},
  ];

  @action addTodo = () => {
    let obj = {
      id: uuid.v1(),
      task: '',
      // task: generateWord(4),
      finished: false,
      edited: true
    }
    this.todos.push(obj);
  }

  @action onPressEnter = (value, todo) => {
    if(value) {
      let todos = toJS(this.todos).slice();
      for (let i = 0; i < todos.length; i++) {
        const item = todos[i];
        if(item.id === todo.id) {
          item.task = value || todo.task; 
          item.edited = false;
        }
      }
      this.todos = todos;
    }else{
      message.error('输入框内容不能为空');
    }
  }

  @action onDoubleClick = (todo) => {
    let todos = toJS(this.todos).slice();
    for (let i = 0; i < todos.length; i++) {
      const item = todos[i];
      if(item.id === todo.id) {
        item.edited = true;
      }
    }
    this.todos = todos;
  }

  @action onFinished = (todo) => {
    let todos = toJS(this.todos).slice();
    for (let i = 0; i < todos.length; i++) {
      const item = todos[i];
      if(item.id === todo.id) {
        // item.edited = false;
        item.finished = !item.finished;
        if(item.finished === true) {
          message.success('太好了，任务已经完成了');
        }
      }
    }
    this.todos = todos;
  }

  @action doDelete = (todo) => {
    let todos = toJS(this.todos).slice();
    todos = todos.filter(item=> item.id !== todo.id);
    this.todos = todos;
  }
}

const todoStore = new TodoStore();
export default todoStore;