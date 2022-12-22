import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo = {
    _id: 0,
    text: '',
    completed: false,
    user: '',
    __v: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
