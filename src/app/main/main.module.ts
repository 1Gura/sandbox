import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {NavMenuComponent} from "../nav-menu/nav-menu.component";
import {CrudModule} from "../crud/crud.module";
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MainRoutingModule} from "./main.routing.module";
import {AboutComponent} from "../about/about.component";
import {AppService} from "../shared/app.service";

@NgModule({
  declarations: [
    MainComponent,
    NavMenuComponent,
    AboutComponent
  ],
  imports: [
    CrudModule,
    CommonModule,
    BrowserModule,
    MainRoutingModule,
  ],
  exports: [MainComponent, MainRoutingModule],
  providers: [AppService],
  bootstrap: []
})

export class MainModule {

}
