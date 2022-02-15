import {NgModule} from "@angular/core";
import {CrudComponent} from "./crud.component";
import {CrudRoutingModule} from "./crud.routing.module";
import {AppService} from "../shared/services/app.service";
import {MatTabsModule} from "@angular/material/tabs";
import {CrudService} from "./shared/services/crud.service";
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    CrudComponent,
  ],
  imports: [
    CrudRoutingModule,
    HttpClientModule,
  ],
  exports: [CrudComponent],
  providers: [AppService, CrudService],
  bootstrap: []
})
export class CrudModule {
}
