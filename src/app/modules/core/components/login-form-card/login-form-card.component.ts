import { ChangeDetectionStrategy, Component } from "@angular/core";
import { catchError, of, tap } from "rxjs";
import { LocalStorageKey, LocalStorageService } from "../../../../shared/services/local-storage.service";

import { LoginFormValue } from "../../types/login-form-value.type";

import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'ac-login-form-card',
  templateUrl: './login-form-card.component.html',
  styleUrls: ['./login-form-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormCardComponent {
  public loginFormValue: LoginFormValue = {
    email: '',
    password: '',
  };
  public loginFormValid = false;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly localStorageService: LocalStorageService,
  ) {}

  public handleLoginFormValueChange(value: LoginFormValue): void {
    this.loginFormValue = value;
  }

  public handleLoginFormValidityChange(valid: boolean): void {
    this.loginFormValid = valid;
  }

  public handleSubmitClick(): void {
    this.authenticationService
      .loginUser(this.loginFormValue)
      .pipe(
        tap(({ accessToken }) => this.localStorageService.save(LocalStorageKey.ACCESS_TOKEN, accessToken)),
        catchError(error => {
          console.log({ error });
          return of(error);
        }),
      )
      .subscribe();
  }
}
