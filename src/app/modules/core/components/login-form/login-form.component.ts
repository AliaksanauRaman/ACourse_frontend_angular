import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, takeUntil, tap } from 'rxjs';

import { AutoDestroy } from '../../../../shared/classes/auto-destroy.class';
import { LoginFormValue } from '../../types/login-form-value.type';

const EMAIL_MAX_LENGTH = 70;
const PASSWORD_MAX_LENGTH = 50;

@Component({
  selector: 'ac-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent extends AutoDestroy implements OnInit {
  @Output()
  readonly valueChange = new EventEmitter<LoginFormValue>();

  @Output()
  readonly validityChange = new EventEmitter<boolean>();

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(EMAIL_MAX_LENGTH)]],
    password: ['', [Validators.required, Validators.maxLength(PASSWORD_MAX_LENGTH)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
    super();
  }

  ngOnInit(): void {
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
