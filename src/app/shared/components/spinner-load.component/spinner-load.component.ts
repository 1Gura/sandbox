import {Component, Input} from '@angular/core';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'spinner-load',
  styleUrls: ['spinner-load.component.scss'],
  templateUrl: 'spinner-load.component.html',
})
export class SpinnerLoadComponent {
  @Input() public isLoad: boolean = false;
}
