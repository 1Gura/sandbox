import { NgModule } from '@angular/core';
import { SnackBarComponent } from './snack-bar.component';

@NgModule({
  declarations: [SnackBarComponent],
  exports: [SnackBarComponent]
})

export class SnackBarModule {
  constructor() {
  }
}
