import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService} from "../ shared/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
  }

}
