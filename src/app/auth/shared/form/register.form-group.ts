import { FormControl, Validators } from '@angular/forms';
import { AuthFormGroup } from './auth.form-group';

export class RegisterFormGroup extends AuthFormGroup {
  constructor() {
    super({
      userName: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6)], [/*checkValidPassword*/]),
    });
  }
}
