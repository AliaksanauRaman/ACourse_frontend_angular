import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: 'root',
})
export class IsUserNotAuthenticatedGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
  ) {}

  public async canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Promise<boolean> {
    return !this.authenticationService.isUserLoggedIn();
  }
}
