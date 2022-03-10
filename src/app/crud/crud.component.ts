import {Component, OnDestroy, OnInit} from '@angular/core';
import {CrudService} from "./shared/services/crud.service";
import {Subject, takeUntil} from "rxjs";
import {TodoModel} from "./shared/models/todo.model";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  private unsubscribe: Subject<void> = new Subject<void>();
  public todos: TodoModel[] = [];

  constructor(private crudService: CrudService) {

  }

  //
  // public ngOnInit(): void {
  //   this.crudService.getTodos()
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe((data) => {
  //       this.todos = data;
  //     });
  // }
  //
  // public ngOnDestroy(): void {
  //   this.unsubscribe.next();
  //   this.unsubscribe.complete()
  // }

}
