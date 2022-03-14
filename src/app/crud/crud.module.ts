import { NgModule } from '@angular/core';
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud.routing.module';
import { AppService } from '../shared/services/app.service';
import { CrudService } from './shared/services/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../shared/modules/material.module';
import { TabModule } from './tab/tab.module';

@NgModule({
  declarations: [
    CrudComponent,
  ],
  imports: [
    CrudRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
    TabModule
  ],
  exports: [CrudComponent],
  providers: [AppService, CrudService],
  bootstrap: []
})
export class CrudModule {
}
