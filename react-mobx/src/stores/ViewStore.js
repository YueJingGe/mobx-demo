import { observable } from 'mobx';
import { ALL_TODOS } from '../constants';

class ViewStore {
  // 编辑中的todo实例
  @observable todoBeingEdited = null;
  @observable todoFilter = ALL_TODOS;
}

export default ViewStore;