import { FormControl, FormGroup, Validators } from '@angular/forms';

export class TodoFormGroup extends FormGroup {
  constructor() {
    super({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      done: new FormControl(false)
    });
  }
}
