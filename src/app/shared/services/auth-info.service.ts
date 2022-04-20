import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { JwtResponseModel } from '../../auth/shared/model/jwt-respone.model';
import { JwtModel } from '../../auth/shared/model/jwt.model';
import { Subject } from 'rxjs';

@Injectable()
export class AuthInfoService {
  private unsubscribe: Subject<void> = new Subject<void>();
  public user: UserModel = new UserModel();
  public token: string | null = '';
  public refreshToken: string | null = '';

  constructor() {

    this.token = localStorage.getItem('token');
    this.refreshToken = localStorage.getItem('refreshToken');
    this.getUserInfo();
  }

  public setJwtInfo(jwtInfo: JwtResponseModel): void {
    localStorage.setItem('token', jwtInfo.token);
    localStorage.setItem('refreshToken', jwtInfo.refreshToken);
    this.token = jwtInfo.token;
    this.refreshToken = jwtInfo.refreshToken;
  }

  public getJwtInfo(jwtInfo: JwtResponseModel): JwtModel {
    // const token: string | null = localStorage.getItem('token');
    // const refreshToken: string | null = localStorage.getItem('refreshToken');
    // return new JwtModel(token ? token : '', refreshToken ? refreshToken : '');
    return new JwtModel();
  }
}
