import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { SnackBarService } from "../../../shared/modules/snack-bar";

import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: 'root',
})
export class IsUserAuthenticatedGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly snackBarService: SnackBarService,
    private readonly router: Router,
  ) {}

  public async canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Promise<boolean> {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }

    this.snackBarService.showError('Your session has expired!');

    return this.router.navigate(['/login']).then(() => false);
  }
}
