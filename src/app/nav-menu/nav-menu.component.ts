import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService} from "../ shared/app.service";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
