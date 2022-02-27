import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainModule} from "./main/main.module";
import {RouterModule} from "@angular/router";
import {AppService} from "./shared/services/app.service";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "./shared/modules/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MainModule,
    RouterModule,
    MaterialModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
