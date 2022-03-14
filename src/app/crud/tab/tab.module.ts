import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TabComponent } from './tab.component';
import { CrudService } from '../shared/services/crud.service';
import { CommonModule } from '@angular/common';
import { SpinnerLoadComponent } from '../../shared/components/spinner-load.component/spinner-load.component';
import { GetTabAllComponent } from './get-tab-all/get-tab-all.component';
import { GetTabComponent } from './get-tab/get-tab.component';
import { PostTabComponent } from './post-tab/post-tab.component';
import { PatchTabComponent } from './patch-tab/patch-tab.component';
import { FlexModule } from '@angular/flex-layout';
import { AppTodoComponent } from './app-todo/app-todo.component';
import { TabService } from '../shared/services/tab.service';
import { SnackBarService } from '../../shared/services/snack-bar.service';

@NgModule({
  declarations: [
    TabComponent,
    SpinnerLoadComponent,
    GetTabAllComponent,
    GetTabComponent,
    PostTabComponent,
    PatchTabComponent,
    AppTodoComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FlexModule,
  ],
  providers: [CrudService, TabService, SnackBarService],
  exports: [TabComponent],
  bootstrap: [TabComponent],
})
export class TabModule {
}
