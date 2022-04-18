import { Component, OnInit } from '@angular/core';
import { LoginFormGroup } from '../../shared/form/login.form-group';
import { Subject, take, takeUntil } from 'rxjs';
import { JwtResponseModel } from '../../shared/model/jwt-respone.model';
import { AuthManagementService } from '../../shared/services/auth-management.service';
import { SnackBarService } from '../../../shared/services/snack-bar.service';
import { AuthInfoService } from '../../../shared/services/auth-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: LoginFormGroup = new LoginFormGroup();
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private authManagerService: AuthManagementService,
    private snackBar: SnackBarService,
    private authInfoService: AuthInfoService) {
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public loginUser(): void {
    if (this.loginFormGroup.invalid) {
      this.loginFormGroup.markAllAsTouched();
      this.snackBar.openSnackBar('Заполните обязательные поля');
      return;
    }
    this.authManagerService.login(this.loginFormGroup.value)
      .pipe(take(1), takeUntil(this.unsubscribe))
      .subscribe((data: JwtResponseModel) => {
        this.authInfoService.setJwtInfo(data)

      }, (error: any) => {
        debugger
        this.snackBar.openSnackBarArr(error.error.errors);
      });
  }
}
