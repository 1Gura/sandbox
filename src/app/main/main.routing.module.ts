import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CrudComponent} from "../crud/crud.component";
import {AboutComponent} from "../about/about.component";


const routes: Routes = [
  {
    path: '',
    component: CrudComponent
  },
  {
    path: 'crud',
    component: CrudComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

  constructor() {
  }
}
