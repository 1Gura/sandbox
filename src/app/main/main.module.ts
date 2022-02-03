import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {AppService} from "../ shared/app.service";
import {MainRoutingModule} from "./main.routing.module";
import {NavMenuComponent} from "../nav-menu/nav-menu.component";
import {CrudModule} from "../crud/crud.module";
import {RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MainComponent,
    NavMenuComponent,
  ],
  imports: [
    CrudModule,
    MainRoutingModule,
    RouterModule,
    CommonModule,
    BrowserModule
  ],
  exports:[MainComponent, RouterModule],
  providers: [AppService],
  bootstrap: []
})

export class MainModule {

}
