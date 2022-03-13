import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TodoModel } from '../shared/models/todo.model';
import { CrudService } from '../shared/services/crud.service';
import { TodoFormGroup } from '../shared/form-group/todo.form-group';
import { TabService } from '../shared/services/tab.service';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-tab',
  styleUrls: ['tab.component.scss'],
  templateUrl: 'tab.component.html',
})
export class TabComponent implements OnInit, OnDestroy {
  public todos: TodoModel[] = [];
  public isLoad: boolean = false;
  public todoForm: TodoFormGroup = new TodoFormGroup();
  public currentTab: number = 0;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private crudService: CrudService, private tabService: TabService) {
  }

  public ngOnInit(): void {
    this.tabService.currentTab
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((tabNumber: number) => {
        // debugger
        this.currentTab = tabNumber;
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public changeTabNumber(currentTab: number): void {
    this.tabService.currentTab.next(currentTab);
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license */
