import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from "../../../main/shared/services/base.service";
import {TodoModel} from "../models/todo.model";

@Injectable()

export class CrudService extends BaseService {
  constructor(private http: HttpClient) {
    super(http, 'https://localhost:7151/api/todo');
  }

  public getTodos(): Observable<TodoModel[]> {
    return this.get('getTodos');
  }
}
