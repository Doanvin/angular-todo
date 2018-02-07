import { Component, OnInit } from '@angular/core';

import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {}

  createList(listTitle: string, tags: string) {
    this.listService.addList(listTitle, tags);
  }
}
