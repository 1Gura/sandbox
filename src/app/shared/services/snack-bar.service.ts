import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';

@Injectable()
export class SnackBarService {
  private durationSecond: number = 4;

  constructor(private _snackBar: MatSnackBar) {
  }

  public openSnackBar(): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationSecond * 1000,
    });
  }
}
