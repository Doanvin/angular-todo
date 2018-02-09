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

  constructor(private listService: ListService) {
  }

  ngOnInit() {
  }

  updateCurrentList(index: number) {
    this.listService.updateCurrentList(index);
    console.log(this.listService.currentList);
  }

}
