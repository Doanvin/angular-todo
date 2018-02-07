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

  constructor(private listsService: ListService) {
  }

  ngOnInit() {
    this.lists = this.listsService.lists;
  }

  showTodos(index: string) {
    console.log(this.lists[index].todos);
    return this.lists[index]
  }

}
