import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})


export class TasksService {
  private jsonUrl = 'sim_database.json';

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.jsonUrl);
  }
}
