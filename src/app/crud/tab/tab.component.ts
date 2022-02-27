import {Component} from '@angular/core';
import {Subject} from "rxjs";
import {TodoModel} from "../shared/models/todo.model";
import {CrudService} from "../shared/services/crud.service";
import {TodoFormGroup} from "../shared/form-group/todo.form-group";

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-tab',
  styleUrls: ['tab.component.scss'],
  templateUrl: 'tab.component.html',
})
export class TabComponent {
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

}


/**  Copyright 2022 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license */
