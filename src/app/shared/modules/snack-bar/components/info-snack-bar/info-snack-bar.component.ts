import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { MatSnackBar, MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

import { SnackBarData } from "../../types/snack-bar-data.type";

@Component({
  selector: 'ac-info-snack-bar',
  templateUrl: './info-snack-bar.component.html',
  styleUrls: ['./info-snack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoSnackBarComponent {
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
