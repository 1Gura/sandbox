import {NgModule} from "@angular/core";
import {CrudComponent} from "./crud.component";
import {CrudRoutingModule} from "./crud.routing.module";
import {AppService} from "../shared/services/app.service";
import {CrudService} from "./shared/services/crud.service";

import {HttpClientModule} from "@angular/common/http";
import {TabComponent} from "./tab/tab.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MaterialModule} from "../shared/modules/material.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    CrudComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule
  ],
  exports: [CrudComponent],
  providers: [AppService, CrudService],
  bootstrap: []
})
export class CrudModule {
}
