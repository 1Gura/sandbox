import { FormControl, FormGroup, Validators } from '@angular/forms';

export class AuthFormGroup extends FormGroup {
  constructor(formControlItem: {} = {}) {
    super({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6)]),
        ...formControlItem
      }
    );
  }
}
