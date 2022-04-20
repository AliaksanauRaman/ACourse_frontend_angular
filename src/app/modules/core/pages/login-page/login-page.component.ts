import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { SuccessUserLoginResponse } from '../../types/success-user-login-response.type';

import { LocalStorageKey, LocalStorageService } from '../../../../shared/services/local-storage.service';

@Component({
  selector: 'ac-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) {}

  async handleUserSuccessLogin(successLoginResponse: SuccessUserLoginResponse): Promise<void> {
    this.localStorageService.save(
      LocalStorageKey.ACCESS_TOKEN,
      successLoginResponse.accessToken,
    );
    await this.router.navigate(['/']);
  }
}
