import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject, takeUntil} from "rxjs";
import {TodoModel} from "../../shared/models/todo.model";
import {CrudService} from "../../shared/services/crud.service";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {TodoFormGroup} from "../../shared/form-group/todo.form-group";

@Component({
  selector: 'app-post-tab',
  templateUrl: 'post-tab.component.html',
  styleUrls: ['post-tab.component.scss']
})

export class PostTabComponent implements OnInit, OnDestroy{
  private unsubscribe: Subject<void> = new Subject<void>();
  public todos: TodoModel[] = [];
  public isLoad: boolean = false;
  public todoForm: TodoFormGroup = new TodoFormGroup();

  constructor(private crudService: CrudService) {
  }

  public ngOnInit(): void {
  }


  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete()
  }

  public checked(checkboxChange: MatCheckboxChange, todo: TodoModel): void {
    todo.done = checkboxChange.checked;
  }

  public createTodo(): void {
    debugger
    if(this.todoForm.valid) {
      this.crudService.createTodo(<TodoModel>this.todoForm.value).subscribe((todo: TodoModel) => {
        debugger
      });
    } else {
      this.todoForm.markAllAsTouched();
    }
  }
}
