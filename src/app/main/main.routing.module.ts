import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {CrudComponent} from "../crud/crud.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

  constructor() {
  }
}
