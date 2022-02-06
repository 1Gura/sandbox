import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AboutComponent} from "../about/about.component";
import {BrowserModule} from "@angular/platform-browser";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../crud/crud.module').then(m => m.CrudModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('../crud/crud.module').then(m => m.CrudModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '/about'
  },
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

  constructor() {
  }
}
