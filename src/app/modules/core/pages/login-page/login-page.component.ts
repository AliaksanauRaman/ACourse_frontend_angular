import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LoginFormValue } from "../../components/login-form/login-form.component";

@Component({
  selector: 'ac-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  public loginFormValue: LoginFormValue | null = null;
  public loginFormValid = false;

  public handleLoginFormValueChange(value: LoginFormValue): void {
    this.loginFormValue = value;
  }

  public handleLoginFormValidityChange(valid: boolean): void {
    this.loginFormValid = valid;
  }

  public handleSubmitClick(): void {

  }
}
