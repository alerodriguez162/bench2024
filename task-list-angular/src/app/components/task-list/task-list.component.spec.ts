import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let taskService: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      providers: [ TaskService ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);

    spyOn(taskService, 'getTasks').and.returnValue([
      new Task('Test Task 1'),
      new Task('Test Task 2')
    ]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a task and update the list', () => {
    spyOn(taskService, 'deleteTask').and.callThrough();
    component.deleteTask(0); 
    expect(taskService.deleteTask).toHaveBeenCalledWith(0);
  });

  it('should update a task when modified', () => {
    const updatedTask = new Task('Updated Test Task', true);
    spyOn(taskService, 'updateTask').and.callThrough();
    component.updateTask(0, updatedTask);
    expect(taskService.updateTask).toHaveBeenCalledWith(0, updatedTask);
  });
});