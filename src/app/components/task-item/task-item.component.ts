import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {//delete button function emits to parent html of tasks component
    console.log(task);
    this.onDeleteTask.emit(task);

  }

  onToggle(task: any) {//toggle function via event emmiter to parent tasks html
    console.log(task);
    this.onToggleReminder.emit(task);

  }
 
}