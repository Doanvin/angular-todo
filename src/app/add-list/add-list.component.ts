import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    let tags = form.value.newTags.split(',');
    // Format tags without whitespace, lowercase, remove empty strings
    for (let i = 0; i < tags.length; i++) {
      tags[i] = tags[i].trim().toLowerCase();
      if (tags[i] == '') {
        tags.splice(i, 1);
      }
    }
    this.listService.addList(<string>form.value.newList, <string[]>tags);
  }
}
