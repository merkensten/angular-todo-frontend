import { Component, Input } from '@angular/core';
import { Todo } from '../types';

@Component({
  selector: 'app-display-todos',
  templateUrl: './display-todos.component.html',
  styleUrls: ['./display-todos.component.scss'],
})
export class DisplayTodosComponent {
  @Input() todos: Todo[] = [];
}
