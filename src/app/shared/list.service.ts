import { List } from './list.model';

export class ListService {
  listsKey: string;
  lists: List[];
  currentList: any;

  constructor () {
    this.listsKey = 'Lists';
    this.lists = JSON.parse(localStorage.getItem(this.listsKey)) || [];
    this.currentList = {'index': 0,
                        'todos': this.lists[0].todos
                       };
  }

  addList(title: string, tags: string) {
    const newList = new List(title, tags);
    this.lists.push(newList);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  addTodo(newTask: string) {
    const todo = {'text': newTask,
                'completed': false
               };
    this.lists[this.currentList.index.toString()].todos.unshift(todo);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  removeTodo(todoIndex) {
    this.lists[this.currentList.index.toString()].todos.splice(todoIndex, 1);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  updateCurrentList(listIndex: number) {
    this.currentList = {'index': listIndex,
                        'todos': this.lists[listIndex.toString()].todos
                       };
  }

  updateTodo(todoIndex: number) {
    const complete = this.lists[this.currentList.index.toString()]
      .todos[todoIndex].completed;

    this.lists[this.currentList.index.toString()]
      .todos[todoIndex].completed = (complete ? false : true);

    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

}
