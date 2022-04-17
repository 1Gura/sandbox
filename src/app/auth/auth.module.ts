import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthModuleRouting } from './auth.module.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MatButtonModule,
    AuthModuleRouting,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: []
})
export class AuthModule {
  constructor() {
  }
}
