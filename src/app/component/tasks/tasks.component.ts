import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasksService.getTask().subscribe(data => {
      this.tasks = data;
    })
  }


















}
