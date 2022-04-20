import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { UserCredentials } from '../types/user-credentials.type';
import { SuccessUserLoginResponse } from '../types/success-user-login-response.type';
import { isDecodedJwtToken } from '../types/decoded-jwt-token.type';

import { API_URL } from '../../../shared/injection-tokens/api-url';
import { LocalStorageService, LocalStorageKey } from '../../../shared/services/local-storage.service';
import { JSON_HTTP_HEADERS } from '../../../shared/constants/json-http-headers';

const MILLISECOND_IN_SECOND = 1000;

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(API_URL)
    private readonly apiUrl: string,
    private readonly httpClient: HttpClient,
    private readonly localStorageService: LocalStorageService,
  ) {}

  makeHttpRequestToLoginUserByCredentials(
    userCredentials: UserCredentials,
  ): Observable<SuccessUserLoginResponse> {
    return this.httpClient.post<SuccessUserLoginResponse>(
      `${this.apiUrl}/api/auth/login`,
      userCredentials,
      {
        headers: JSON_HTTP_HEADERS,
      },
    );
  }

  isUserLoggedIn(): boolean {
    const jwtToken = this.getJwtTokenOfCurrentUserOrNull();

    if (jwtToken === null) {
      return false;
    }

    return this.isJwtTokenValid(jwtToken);
  }

  private getJwtTokenOfCurrentUserOrNull(): string | null {
    return this.localStorageService.get(LocalStorageKey.ACCESS_TOKEN);
  }

  // TODO: Think about differentiation between session expired and
  // invalid decoded token
  private isJwtTokenValid(token: string): boolean {
    const decodedJwtToken = jwtDecode<unknown>(token);

    if (!isDecodedJwtToken(decodedJwtToken)) {
      return false;
    }

    return (decodedJwtToken.exp * MILLISECOND_IN_SECOND) >= new Date().getTime();
  }
}
