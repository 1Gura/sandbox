import {NgModule} from "@angular/core";
import {CrudComponent} from "./crud.component";
import {CrudRoutingModule} from "./crud.routing.module";
import {AppService} from "../shared/app.service";

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
