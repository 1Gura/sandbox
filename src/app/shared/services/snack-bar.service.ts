import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';

@Injectable()
export class SnackBarService {
  public message: string = '';
  private durationSecond: number = 4;

  constructor(private _snackBar: MatSnackBar) {
  }

  public openSnackBar(message: string = 'Что-то пошло не так'): void {
    this.message = message;
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationSecond * 1000,
    });
  }

  public openSnackBarArr(errors: string[] = ['Что-то пошло не так']): void {
    this.message = errors.join(',');
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationSecond * 1000,
    });
  }
}
