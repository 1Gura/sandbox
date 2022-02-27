import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModule} from "../../shared/modules/material.module";
import {HttpClientModule} from '@angular/common/http';
import {TabComponent} from "./tab.component";
import {TodoComponent} from "../todo/todo.component";
import {CrudService} from "../shared/services/crud.service";
import {CommonModule} from "@angular/common";
import {SpinnerLoadComponent} from "../../shared/components/spinner-load.component/spinner-load.component";
import {GetTabAllComponent} from "./get-tab-all/get-tab-all.component";
import {GetTabComponent} from "./get-tab/get-tab.component";
import {PostTabComponent} from "./post-tab/post-tab.component";

@NgModule({
  declarations: [
    TabComponent,
    TodoComponent,
    SpinnerLoadComponent,
    GetTabAllComponent,
    GetTabComponent,
    PostTabComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [CrudService],
  exports: [TabComponent],
  bootstrap: [TabComponent],
})
export class TabModule {
}
