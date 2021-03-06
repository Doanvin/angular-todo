import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

import { List } from '../../shared/list.model';
import { ListService } from '../../shared/list.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss']
})
export class AllListsComponent implements OnInit {

  constructor(public listService: ListService) {
  }

  ngOnInit() {
  }

  updateCurrentList(index: number) {
    this.listService.updateCurrentList(index);
    console.log(this.listService.currentList);
  }

  isCurrentList(i: number) {
    if (this.listService.currentList.index !== undefined) {
      return this.listService.currentList.index == i ? true : false;
    }
  }

}
