import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { API_URL } from "../../../tokens/api-url.token";
import { UserCredentials } from "../types/user-credentials.type";
import { LoginUserResponse } from "../types/login-user-response.type";

// TODO: Move to some shared place
const defaultHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(API_URL)
    private readonly apiUrl: string,
    private readonly httpClient: HttpClient,
  ) {}

  public loginUser(userCredentials: UserCredentials): Observable<LoginUserResponse> {
    return this.httpClient.post<LoginUserResponse>(
      `${this.apiUrl}/api/auth/login`,
      userCredentials,
      {
        headers: defaultHeaders,
      },
    );
  }
}
