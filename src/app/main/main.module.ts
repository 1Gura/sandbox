import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { NavMenuComponent } from '../shared/components/nav-menu/nav-menu.component';
import { CrudModule } from '../crud/crud.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main.routing.module';
import { AppService } from '../shared/services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './shared/services/main.service';
import { AboutComponent } from '../shared/components/about/about.component';

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
  exports: [MainComponent, MainRoutingModule, HttpClientModule],
  providers: [MainService, AppService],
  bootstrap: []
})

export class MainModule {

}
