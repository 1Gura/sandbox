import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { JwtResponseModel } from '../../auth/shared/model/jwt-respone.model';
import { AuthManagementService } from '../../auth/shared/services/auth-management.service';
import { JwtModel } from '../../auth/shared/model/jwt.model';
import { BaseService } from '../../main/shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInfoService extends BaseService {
  public user: UserModel = new UserModel();
  public token: string | null = '';
  public refreshToken: string | null = '';

  constructor(
    authManagementService: AuthManagementService,
    private http: HttpClient,
    snackBarService: SnackBarService) {
    super(http, 'https://localhost:7151/api/todo', snackBarService);
    this.token = localStorage.getItem('token');
    this.refreshToken = localStorage.getItem('refreshToken');
    this.getUserInfo();
  }

  public setJwtInfo(jwtInfo: JwtResponseModel): void {
    localStorage.setItem('token', jwtInfo.token);
    localStorage.setItem('refreshToken', jwtInfo.refreshToken);
  }

  public getJwtInfo(jwtInfo: JwtResponseModel): JwtModel {
    // const token: string | null = localStorage.getItem('token');
    // const refreshToken: string | null = localStorage.getItem('refreshToken');
    // return new JwtModel(token ? token : '', refreshToken ? refreshToken : '');
    return new JwtModel();
  }

  private getUserInfo(): void {
    this.
  }
}
