import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: 'snack-bar.component.html',
  styleUrls: ['snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  public message: string = '';

  constructor(private snackBarService: SnackBarService) {

  }

  public ngOnInit(): void {
    this.message = this.snackBarService.message;
  }
}
