import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { TodolistComponent } from '../component/todolist/todolist.component';
import { TOdoViewComponent } from '../component/todo-view/todo-view.component';
const routes: Routes = [
{ path: '', component: TodolistComponent },
{ path: 'list', component: TodolistComponent },
{ path: 'view', component: TOdoViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
