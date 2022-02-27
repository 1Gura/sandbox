import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject, takeUntil} from "rxjs";
import {TodoModel} from "../../shared/models/todo.model";
import {CrudService} from "../../shared/services/crud.service";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-get-tab-all',
  templateUrl: 'get-tab-all.component.html',
  styleUrls: ['get-tab-all.component.scss']
})

export class GetTabAllComponent implements OnInit, OnDestroy{
  private unsubscribe: Subject<void> = new Subject<void>();
  public todos: TodoModel[] = [];
  public isLoad: boolean = false;

  constructor(private crudService: CrudService) {
  }

  public ngOnInit(): void {
  }

  public getAllTodos(): void {
    this.isLoad = true;
    this.crudService.getTodos()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: TodoModel[]) => {
        this.isLoad = false;
        this.todos = data;
      }, error => {
        console.error(error.message)
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete()
  }

  public checked(checkboxChange: MatCheckboxChange, todo: TodoModel): void {
    todo.done = checkboxChange.checked;
  }
}
