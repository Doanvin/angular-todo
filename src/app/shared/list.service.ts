import { Injectable } from '@angular/core';

import { List } from './list.model';

@Injectable()
export class ListService {
  listsKey: string;
  currentListKey: string;
  lists: List[];
  currentList: { index: number, todos };

  constructor () {
    this.listsKey = 'Lists';
    this.currentListKey = 'CurrentList';
    this.lists = JSON.parse(localStorage.getItem(this.listsKey)) || [];
    this.currentList = JSON.parse(localStorage.getItem(this.currentListKey)) || {};
  }

  addList(title: string, tags: string[]) {
    const newList = new List(title, tags);
    this.lists.push(newList);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));

    if (this.currentList.index === undefined) {
      this.currentList = {index: 0, todos: []};
      this.updateCurrentList(0);
    }
  }

  removeList(listIndex: number) {
    this.lists.splice(listIndex, 1);
    this.updateCurrentList(listIndex - 1);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  addTodo(newTask: string) {
    const todo = {
      text: newTask,
      completed: false
    };
    this.lists[this.currentList.index.toString()].todos.unshift(todo);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  removeTodo(todoIndex: number) {
    this.lists[this.currentList.index.toString()].todos.splice(todoIndex, 1);
    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));
  }

  updateCurrentList(listIndex: number) {
    this.currentList = {
      index: listIndex,
      todos: this.lists[listIndex.toString()].todos
    };

    localStorage.setItem(this.currentListKey, JSON.stringify(this.currentList));
  }

  currentListTitle() {
    return this.lists[this.currentList.index.toString()].title;
  }

  updateTodo(todoIndex: number) {
    const complete = this.lists[this.currentList.index.toString()]
      .todos[todoIndex].completed;

    this.lists[this.currentList.index.toString()]
      .todos[todoIndex].completed = (complete ? false : true);

    localStorage.setItem(this.listsKey, JSON.stringify(this.lists));

    this.currentList.todos[todoIndex].completed = complete ? false : true;
    localStorage.setItem(this.currentListKey, JSON.stringify(this.currentList));
  }

}
