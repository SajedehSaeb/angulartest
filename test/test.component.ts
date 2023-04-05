import { Component, OnInit } from '@angular/core';
import { TodoItemList } from '../model/todolist';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  imgurl : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjlrU-05M3BsJdM_WMc3t7YMWmUrZa1f9sbqluz7S&s';
  title = 'this is my title';
  date = new Date();

  starRate = 0 ;

  constructor(){}

  ngOnInit(): void {

  }

}
