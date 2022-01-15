import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { SnackBarService } from "../../../shared/modules/snack-bar";

import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: 'root',
})
export class IsUserNotAuthenticatedGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly snackBarService: SnackBarService,
    private readonly router: Router,
  ) {}

  public async canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Promise<boolean> {
    if (this.authenticationService.isUserLoggedIn()) {
      this.snackBarService.showInfo('You should log out first.');

      return this.router.navigate(['/']).then(() => false);
    }

    return true;
  }
}
