import { TodoItem } from "./todo";

export class TodoItemList {
  todoList : TodoItem[] = [];

  cunstructor(){

  }

  get openItemList() : TodoItem[] {
    return this.todoList.filter(item => item.isComplete == false)
  }

  get closeItemList() : TodoItem[] {
    return this.todoList.filter(item => item.isComplete == true)
  }

  addNewItem(item : TodoItem){
    this.todoList.push(item);
  }
}
