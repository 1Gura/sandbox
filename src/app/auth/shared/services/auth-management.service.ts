import { Injectable } from '@angular/core';
import { BaseService } from '../../../main/shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { SnackBarService } from '../../../shared/services/snack-bar.service';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { RegisterModel } from '../model/register.model';
import { JwtResponseModel } from '../model/jwt-respone.model';
import { LoginModel } from '../model/login.model';
import { plainToClass } from 'class-transformer';
import { AuthInfoService } from '../../../shared/services/auth-info.service';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthManagementService extends BaseService {

  constructor(
    private http: HttpClient,
    snackBarService: SnackBarService,
    authInfoService: AuthInfoService,
  ) {
    super(
      http,
      snackBarService,
      'https://localhost:7151/api/AuthManagement',
      authInfoService
    );
  }

  public register(registerForm: RegisterModel): Observable<JwtResponseModel> {
    return this.post('register', registerForm).pipe(map((data: JwtResponseModel) => plainToClass(JwtResponseModel, data)));
  }

  public login(loginForm: LoginModel): Observable<JwtResponseModel> {
    return this.post('login', loginForm)
      .pipe(map((data: JwtResponseModel) => plainToClass(JwtResponseModel, data)));
  }

  public checkUniqEmail(email: string): Observable<any> {
    return this.getParameters('UniqEmail', {email});
  }

  emailExists(email: string): Observable<boolean | null> {
    debugger
    return this.checkUniqEmail(email).pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map((response) => {
        return response;
      })
    );
  }

  uniqueEmailValidator(): AsyncValidatorFn {
    debugger
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.emailExists(control.value).pipe(
        map((exists) => {
          debugger
          return exists ? {emailExists: true} : null;
        }),
      );
    };
  }
}
