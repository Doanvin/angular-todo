import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../shared/list.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss'],
  providers: [ListService]
})
export class AllListsComponent implements OnInit {

  constructor(private listsService: ListService) {
  }

  ngOnInit() {
    this.lists = this.listsService.lists;
  }

  @Input() lists: {}[];
}
