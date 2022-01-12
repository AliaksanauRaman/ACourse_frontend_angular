import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { map, takeUntil, tap } from "rxjs";

import { AutoDestroy } from "../../../../shared/classes/auto-destroy.class";
import { LoginFormValue } from "../../types/login-form-value.type";

@Component({
  selector: 'ac-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent extends AutoDestroy implements OnInit {
  @Output()
  public readonly valueChange = new EventEmitter<LoginFormValue>();

  @Output()
  public readonly validityChange = new EventEmitter<boolean>();

  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(70)]],
    password: ['', [Validators.required, Validators.maxLength(50)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subToLoginFormValueChanges();
    this.subToLoginFormValidityChanges();
  }

  private subToLoginFormValueChanges(): void {
    this.loginForm.valueChanges
      .pipe(
        tap(formValue => this.valueChange.emit(formValue)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  private subToLoginFormValidityChanges(): void {
    this.loginForm.statusChanges
      .pipe(
        map((loginFormStatus) => loginFormStatus === 'VALID'),
        tap(formIsValid => this.validityChange.emit(formIsValid)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }
}
