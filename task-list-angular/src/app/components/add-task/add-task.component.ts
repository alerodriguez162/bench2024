import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }
}