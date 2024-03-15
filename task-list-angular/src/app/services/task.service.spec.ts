import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Task } from './../models/task.model';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    const task = new Task('Test Task');
    service.addTask(task);
    expect(service.getTasks().length).toBe(1);
    expect(service.getTasks()[0].name).toEqual('Test Task');
  });

  it('should delete a task', () => {
    const task = new Task('Test Task');
    service.addTask(task);
    service.deleteTask(0);
    expect(service.getTasks().length).toBe(0);
  });
});