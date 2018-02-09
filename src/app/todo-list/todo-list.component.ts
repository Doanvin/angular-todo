import { Component, OnInit } from '@angular/core';

import { List } from '../shared/list.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  addTodo(newTodo) {
    this.listService.addTodo(newTodo);
  }

  toggleCompleted(todoIndex: number) {
    this.listService.updateTodo(todoIndex);
  }
}
