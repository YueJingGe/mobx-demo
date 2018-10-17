import TodoStore from './TodoStore';
import ViewStore from './ViewStore' ; 

const todoStore = new TodoStore();
const viewStore = new ViewStore();

export default {
  todoStore,
  viewStore
}