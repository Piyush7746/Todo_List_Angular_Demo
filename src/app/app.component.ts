import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  todoList: string[] = [];
  constructor() { }

  pushTodo(value: string) {
    console.log(value, this.todoList);
    this.todoList.splice(0, 0, value);
  }
  
  remove(index: number) {
    this.todoList.splice(index, 1);
  }
}
