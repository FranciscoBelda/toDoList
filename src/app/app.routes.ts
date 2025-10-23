import { Routes } from '@angular/router';
import {TodoPageComponent} from './pages/todo-page/todo-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full',
  },
  {
    path: 'todo-list',
    component: TodoPageComponent
  }
];
