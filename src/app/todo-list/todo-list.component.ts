import { Component, OnInit } from '@angular/core';

import { List } from '../shared/list.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  lists: List[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.lists;
  }

  addTodo(newTodo: string) {
    this.listService.addTodo(newTodo);
  }

  // removeTodo(todoIndex: number) {
  //   this.listService.removeTodo(todoIndex);
  // }

  toggleCompleted(todoIndex: number) {
    this.listService.updateTodo(todoIndex);
  }
}
