import { Component } from '@angular/core';

import { ListService } from './shared/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ListService]
})
export class AppComponent {
  title = 'app';
}
