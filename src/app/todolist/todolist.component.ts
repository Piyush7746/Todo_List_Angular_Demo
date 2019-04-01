import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  @Input() todoList: string[];
  @Output() index = new EventEmitter<number>();

  constructor() { }

  removeItem(index: number) {
    this.index.emit(index);
  }
}
