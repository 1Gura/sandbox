import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TodoModel } from '../../shared/models/todo.model';
import { CrudService } from '../../shared/services/crud.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TodoFormGroup } from '../../shared/form-group/todo.form-group';
import { Validators } from '@angular/forms';
import { TabService } from '../../shared/services/tab.service';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-patch-tab',
  templateUrl: 'patch-tab.component.html',
  styleUrls: ['patch-tab.component.scss']
})

export class PatchTabComponent implements OnInit, OnDestroy {
  public todos: TodoModel[] = [];
  public isLoad: boolean = false;
  public todoForm: TodoFormGroup = new TodoFormGroup();
  public isHaveTodo: boolean = false;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private crudService: CrudService, private tabService: TabService, private snackBarService: SnackBarService) {
  }

  public ngOnInit(): void {
    this.setValidators();
    this.tabService.todoForm.pipe(takeUntil(this.unsubscribe)).subscribe((data: TodoFormGroup) => {
      if (data && data.get('id')?.value) {
        this.todoForm = data;
        this.isHaveTodo = true;
      }
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public checked(checkboxChange: MatCheckboxChange, todo: TodoModel): void {
    todo.done = checkboxChange.checked;
  }

  public getTodoById(): void {
    if (this.todoForm.get('id')?.value) {
      this.crudService.getTodoById(this.todoForm.get('id')?.value)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((todo: TodoModel) => {
          this.isHaveTodo = true;
          this.todoForm.patchValue(todo);
          this.todoForm.get('id')?.clearValidators();
        }, error => {
          //Todo обработать ошибку
        });
    } else {
      this.todoForm.markAllAsTouched();
    }
  }

  public clear(): void {
    this.isHaveTodo = false;
    this.todoForm.reset();
    this.setValidators();

  }

  public changeTodo(): void {
    this.todoForm.valid
      ? this.crudService.changeTodo(this.todoForm.value)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((data: TodoModel) => {
        }, error => {
          this.isLoad = false;
          if (error.status === 404) {
            this.snackBarService.openSnackBar('Ошибка получения записей');
          } else {
            this.snackBarService.openSnackBar(error.error);
          }
        })
      : this.todoForm.markAllAsTouched();
  }

  private setValidators(): void {
    this.todoForm.get('id')?.setValidators([Validators.required]);
  }
}
