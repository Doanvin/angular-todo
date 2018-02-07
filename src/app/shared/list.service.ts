import { List, Todo } from './list.model';

export class ListService {
  lists: List[];
  todos: Todo[];
  listsKey: string;

  constructor () {
    this.listsKey = 'Lists';
		let persistedLists = JSON.parse(localStorage.getItem(this.listsKey) || '[]');
		// Normalize back into classes
    persistedLists.map( (list) => {
      console.log(list);
      // List classes
  		let constructedList = new List(list.title, list.tags.join(','));
      constructedList.id = list.id;
      if (!list.todos || list.todos == 'undefined'){
        constructedList.todos = [];
      } else {
        // Todo classes
        for(let i = 0; i < list.todos.length; i++) {
          let todo = new Todo(list.todos[i].text, list.todos[i].completed);
          constructedList.todos.push(todo);
        }
      }
      return constructedList;
    });
    this.lists = persistedLists;
  }

  addList(title: string, tags: string) {
    let newList = new List(title, tags);
    this.lists.push(newList);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  getListIds() {
    const lists = JSON.parse(localStorage.getItem(this.listsKey));
    let listIds = [];
    for(let i = 0; i < localStorage.length; i++) {
      const listId = localStorage.key(i);
      listIds.push(listId);
    }
    return listIds;
  }

  getLists() {
    const listIds = this.getListIds();
    let lists = [];
    for(let i = 0; i < listIds.length; i++) {
      lists.push(JSON.parse(localStorage.getItem(listIds[i])));
    }
    return lists;
  }
}
