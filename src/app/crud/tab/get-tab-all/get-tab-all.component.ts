import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TodoModel } from '../../shared/models/todo.model';
import { CrudService } from '../../shared/services/crud.service';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-get-tab-all',
  templateUrl: 'get-tab-all.component.html',
  styleUrls: ['get-tab-all.component.scss']
})

export class GetTabAllComponent implements OnInit, OnDestroy {
  public todos: TodoModel[] = [];
  public isLoad: boolean = false;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private crudService: CrudService, private snackBarService: SnackBarService) {
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
        this.isLoad = false;
        if (error.status === 404) {
          this.snackBarService.openSnackBar('Ошибка получения записей');
        } else {
          this.snackBarService.openSnackBar(error.error);
        }
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
