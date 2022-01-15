import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ErrorSnackBarComponent } from "../components/error-snack-bar/error-snack-bar.component";

const DEFAULT_DURATION_IN_MS = 2000;

@Injectable()
export class SnackBarService {
  constructor(
    private readonly snackBar: MatSnackBar,
  ) {}

  public showError(message: string, duration = DEFAULT_DURATION_IN_MS): void {
    this.snackBar.openFromComponent(
      ErrorSnackBarComponent,
      {
        data: { message },
        duration,
      },
    );
  }
}
