import { Component, OnInit } from '@angular/core';

import {  List } from '../shared/list.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  lists: List[]
  currentList: List
  todos: {}[]

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.lists;
    this.currentList = this.listService.lists[0];
    this.todos = this.lists[0].todos;
  }

  displayTodos() {

  }

}
