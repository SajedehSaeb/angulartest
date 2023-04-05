import { Injectable } from '@angular/core';
import { TodoItem } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {}

  getItems(){
    return [
      new TodoItem(),
      new TodoItem(),
    ]
  }
}
