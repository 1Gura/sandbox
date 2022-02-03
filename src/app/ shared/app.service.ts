import {Injectable} from "@angular/core";

@Injectable()
export class AppService {
  public isShowMenu: boolean = true;
  constructor() {
  }

  public showMenu(): void {
    this.isShowMenu = !this.isShowMenu;
  }
}
