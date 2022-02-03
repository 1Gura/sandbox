import {NgModule} from "@angular/core";
import {MainRoutingModule} from "../main/main.routing.module";
import {AppService} from "../ shared/app.service";
import {CrudComponent} from "./crud.component";

@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    MainRoutingModule,
  ],
  exports: [CrudComponent],
  providers: [AppService],
  bootstrap: []
})
export class CrudModule {
}
