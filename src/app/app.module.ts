import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { AllListsComponent } from './nav-list/all-lists/all-lists.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    NavListComponent,
    AllListsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
