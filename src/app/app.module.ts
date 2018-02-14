import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { AllListsComponent } from './nav-list/all-lists/all-lists.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'lists/:id/:title', component: TodoListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    NavListComponent,
    AllListsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
