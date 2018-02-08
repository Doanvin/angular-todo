import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../shared/list.model';
import { ListService } from '../../shared/list.service';
import { TodoListComponent } from '../../todo-list/todo-list.component';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss']
})
export class AllListsComponent implements OnInit {
  lists: List[];

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.lists = this.listService.lists;
  }

  updateCurrentList(index: Number) {
    this.listService.currentList = index;
    console.log(this.listService.currentList);
  }

}
