import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { List } from '../shared/list.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  lists: List[];

  constructor(public listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.lists;
  }

  // Calls addTodo in listService
  onSubmit(form: NgForm) {
    this.listService.addTodo(form.value.newTask);
    if (form.valid && form.submitted) {
      form.reset();
    }
  }

  removeList() {
    this.listService.removeList(this.listService.currentList.index);
  }

  // removeTodo(todoIndex: number) {
  //   this.listService.removeTodo(todoIndex);
  // }

  toggleCompleted(todoIndex: number) {
    this.listService.updateTodo(todoIndex);
  }

  todoEditable(todoIndex: number) {
    const selector = 'label[dataTodoIndex: ' + todoIndex + ']';
    return document.querySelector(selector).classList.contains('edit');
  }

}
