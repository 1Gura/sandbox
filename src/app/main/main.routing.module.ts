import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from '../shared/components/about/about.component';


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
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

  constructor() {
  }
}
