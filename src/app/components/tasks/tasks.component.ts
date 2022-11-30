import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));/* observable from taks service */
  }

  deleteTask(task: Task){//calls from taskService that deletes from server, this.task filters UI
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    console.log(task.reminder);
  }

  addTask(task: Task) {
    console.log(task)
    this.taskService.addTask(task).subscribe((tasks) => (this.tasks.push(task)));
  }
//todo update tasks>> title, day
}
