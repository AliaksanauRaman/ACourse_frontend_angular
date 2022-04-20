import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Output } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

import { LoginFormValue } from '../../types/login-form-value.type';
import { SuccessUserLoginResponse } from '../../types/success-user-login-response.type';

import { AuthenticationService } from '../../services/authentication.service';
import { SnackBarService } from '../../../../shared/modules/snack-bar';

@Component({
  selector: 'ac-login-form-card',
  templateUrl: './login-form-card.component.html',
  styleUrls: ['./login-form-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormCardComponent {
  @Output() readonly successLogin = new EventEmitter<SuccessUserLoginResponse>();

  loginFormValue: LoginFormValue = {
    email: '',
    password: '',
  };
  loginFormValid = false;
  isSubmitButtonManuallyDisabled = false;
  isLoginRequestInProgress = false;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly snackBarService: SnackBarService,
  ) {}

  @HostListener('document:keyup.enter', ['$event'])
  handleDocumentKeyup(_event: KeyboardEvent): void {
    if (!this.loginFormValid) {
      return;
    }

    this.handleSubmitClick();
  }

  handleLoginFormValueChange(value: LoginFormValue): void {
    this.isSubmitButtonManuallyDisabled = false;

    this.loginFormValue = value;
  }

  handleLoginFormValidityChange(valid: boolean): void {
    this.loginFormValid = valid;
  }

  handleSubmitClick(): void {
    this.isLoginRequestInProgress = true;

    this.authenticationService
      .makeHttpRequestToLoginUserByCredentials(this.loginFormValue)
      .pipe(
        tap(loginUserResponse => {
          this.isLoginRequestInProgress = false;
          this.cdRef.markForCheck();
          this.successLogin.emit(loginUserResponse);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Unauthorized) {
            this.snackBarService.showError('Email or password is incorrect!');
          } else {
            this.snackBarService.showError('Unknown error ocurred!');
          }

          this.isSubmitButtonManuallyDisabled = true;
          this.isLoginRequestInProgress = false;
          this.cdRef.markForCheck();
          return of(error);
        }),
      )
      .subscribe();
  }
}
