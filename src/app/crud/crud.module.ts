import {NgModule} from "@angular/core";
import {AppService} from "../ shared/app.service";
import {CrudComponent} from "./crud.component";
import {CrudRoutingModule} from "./crud.routing.module";

@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CrudRoutingModule
  ],
  exports: [CrudComponent],
  providers: [AppService],
  bootstrap: []
})
export class CrudModule {
}
