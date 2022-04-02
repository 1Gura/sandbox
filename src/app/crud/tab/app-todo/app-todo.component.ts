import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from '../../shared/models/todo.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CrudService } from '../../shared/services/crud.service';
import { Subject, takeUntil } from 'rxjs';
import { TabService } from '../../shared/services/tab.service';
import { TodoFormGroup } from '../../shared/form-group/todo.form-group';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-app-todo',
  templateUrl: './app-todo.component.html',
  styleUrls: ['./app-todo.component.scss']
})
export class AppTodoComponent {

  @Input() todo: TodoModel = new TodoModel();
  @Output() changeListTodo: EventEmitter<void> = new EventEmitter<void>();
  public disabledButton: boolean = false;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private crudService: CrudService, private tabService: TabService, private snackBarService: SnackBarService) {
  }

  public checked(checkboxChange: MatCheckboxChange, todo: TodoModel): void {
    todo.done = checkboxChange.checked;
  }

  public deleteTodo(): void {
    this.disabledButton = true;
    this.crudService.deleteTodo(this.todo.id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: TodoModel) => {
        this.changeListTodo.emit();
      }, error => {
        if (error.status === 404) {
          this.snackBarService.openSnackBar('Ошибка получения записей');
        } else {
          this.snackBarService.openSnackBar(error.error);
        }
      });
  }

  public setPatchTab(): void {
    const todoForm: TodoFormGroup = new TodoFormGroup();
    todoForm.patchValue(this.todo);
    this.tabService.todoForm.next(todoForm);
    this.tabService.setCurrentTab(3);
  }
}
