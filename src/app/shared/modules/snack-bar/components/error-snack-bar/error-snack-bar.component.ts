import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { MatSnackBar, MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

import { SnackBarData } from "../../types/snack-bar-data.type";

@Component({
  selector: 'ac-error-snack-bar',
  templateUrl: './error-snack-bar.component.html',
  styleUrls: ['./error-snack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorSnackBarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public readonly snackBarData: SnackBarData,
    private readonly snackBar: MatSnackBar,
  ) {
  }

  public closeSnackBar(): void {
    this.snackBar.dismiss();
  }
}
