import {Component,  OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../shared/services/app.service";

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
