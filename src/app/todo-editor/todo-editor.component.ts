import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent {
  @Output() todo = new EventEmitter<string>();
  newItem: string;

  constructor() { }

  pushTodo() {
    this.todo.emit(this.newItem);
    this.newItem = '';
  }
}
