import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../../../main/shared/services/base.service';
import { TodoModel } from '../models/todo.model';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Injectable()

export class CrudService extends BaseService {
  constructor(
    private http: HttpClient,
    snackBarService: SnackBarService) {
    super(http, '/api/todo', snackBarService);
  }

  public getTodos(): Observable<TodoModel[]> {
    return this.get('getTodos');
  }

  public getTodoByTitle(title: string): Observable<TodoModel[]> {
    return this.getParameters('getTodoByTitle', {title});
  }

  public getTodoById(id: number): Observable<TodoModel> {
    return this.get(`getTodo/${id}`);
  }

  public createTodo(todo: TodoModel): Observable<TodoModel> {
    return this.post('createTodo', todo);
  }

  public changeTodo(todo: TodoModel): Observable<TodoModel> {
    return this.patch(`patchTodo/${todo.id}`, todo);
  }

  public deleteTodo(id: number): Observable<TodoModel> {
    return this.delete(`deleteTodo/${id}`);
  }
}
