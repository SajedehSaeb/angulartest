import { Component } from '@angular/core';
import { TodoItemList } from '../model/todolist';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

myTodoList : TodoItemList = new TodoItemList();
constructor(public todoService : TodoService){
  this.myTodoList.todoList = this.todoService.getItems();
}


addTodo(){
  console.log('add')
}

}
