import {Component, OnInit} from '@angular/core';
import {MainService} from "./shared/services/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
  }

}
