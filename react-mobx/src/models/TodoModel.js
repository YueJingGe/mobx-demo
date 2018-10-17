import { observable } from 'mobx';
/**
 * 创建一个TodoModel实例，供单个todo列表项的操作
 * @param {object} store 传入TodoStore，获取领域模型状态和方法
 * @param {string} id 用于前端操作的实例id
 * @param {string} title todo项的内容
 * @param {boolean} completed 是否完成的状态
 * @memberof TodoModel
 */
class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;

  constructor(store, id, title, completed) {
    this.store = store;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
  // 切换列表项的完成状态
  toggle = () => {
    this.completed = !this.completed;
  }
  // 根据id删除列表项
  delete = () => {
    this.store.todos = this.store.todos.filter(todo => todo.id !== this.id);
  }
  // 设置实例title
  setTitle = (title) => {
    this.title = title;
  }
}
export default TodoModel;