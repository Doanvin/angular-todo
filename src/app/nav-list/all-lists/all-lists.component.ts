import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../shared/list.model';
import { ListService } from '../../shared/list.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss']
})
export class AllListsComponent implements OnInit {
  lists: List[];
  currentList: List;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.lists = this.listService.lists;
    this.currentList = this.listService.currentList;
  }

  showTodos(index: string) {
    console.log(this.lists[index].todos);
    return this.lists[index]
  }

}
