import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { API_URL } from "../../../shared/injection-tokens/api-url";

import { LocalStorageService, LocalStorageKey } from "../../../shared/services/local-storage.service";

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {
  constructor(
    @Inject(API_URL) private readonly apiUrl: string,
    private readonly localStorageService: LocalStorageService,
  ) {}

  public intercept(
    httpRequest: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      httpRequest.url.includes(this.apiUrl)
        ? this.getHttpRequestWithAuthorizationHeaders(httpRequest)
        : httpRequest,
    );
  }

  private getHttpRequestWithAuthorizationHeaders(httpRequest: HttpRequest<unknown>): HttpRequest<unknown> {
    const accessToken = this.localStorageService.get(LocalStorageKey.ACCESS_TOKEN);
    return httpRequest.clone({
      setHeaders: accessToken !== null
        ? { Authorization: `Bearer ${accessToken}` }
        : {},
    });
  }
}
