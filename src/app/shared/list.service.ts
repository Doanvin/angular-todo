import { List } from './list.model';

export class ListService {
  listsKey: string;
  lists: List[];
  currentList: Number;

  constructor () {
    this.listsKey = 'Lists';
		let persistedLists = JSON.parse(localStorage.getItem(this.listsKey)) || [];
		// Normalize back into classes
    // persistedLists.map( (list) => {
    //   console.log('persisted list');
    //   console.log(list);
    //   // List classes
  	// 	let constructedList = new List(list.title, list.tags.join(','));
    //   constructedList.id = list.id;
    //   if (list.todos && list.todos != []){
    //     // Todo classes
    //     for(let i = 0; i < list.todos.length; i++) {
    //       let todo = {'text': list.todos[i].text,
    //                   'completed': list.todos[i].completed
    //                  };
    //       constructedList.todos.push(todo);
    //     }
    //   } else {
    //     constructedList.todos = [];
    //   }
    //   console.log('constructed list');
    //   console.log(constructedList);
    //   return constructedList;
    // });
    this.lists = persistedLists;
    this.currentList = 0;
  }

  addList(title: string, tags: string) {
    let newList = new List(title, tags);
    this.lists.push(newList);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  addTodo(newTask: string){
    let todo = {'text': newTask,
                'completed': false
               };
    this.lists[this.currentList.toString()].todos.unshift(todo);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  getTodos(index: Number) {
    console.log(this.lists[index.toString()].todos);
    return this.lists[index.toString()]
  }

  updateCurrentList(listIndex: Number) {
    this.currentList = listIndex;
  }
}
