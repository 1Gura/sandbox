import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoModel } from '../../shared/models/todo.model';
import { CrudService } from '../../shared/services/crud.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TodoFormGroup } from '../../shared/form-group/todo.form-group';

@Component({
  selector: 'app-get-tab',
  templateUrl: 'get-tab.component.html',
  styleUrls: ['get-tab.component.scss']
})

export class GetTabComponent implements OnInit, OnDestroy {
  public todos: TodoModel[] = [];
  public isLoad: boolean = false;
  public todoForm: TodoFormGroup = new TodoFormGroup();
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private crudService: CrudService) {
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public getTodoByTitle(): void {
    if (this.todoForm.get('title')?.valid) {
      this.isLoad = true;
      this.crudService.getTodoByTitle(this.todoForm.get('title')?.value)
        .subscribe((data: TodoModel[]) => {
          this.isLoad = false;
          this.todos = data;
        });
    } else {
      this.todoForm.markAllAsTouched();
    }

  }


  public checked(checkboxChange: MatCheckboxChange, todo: TodoModel): void {
    todo.done = checkboxChange.checked;
  }
}
