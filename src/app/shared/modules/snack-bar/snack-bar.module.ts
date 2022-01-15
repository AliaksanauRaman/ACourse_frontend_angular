import { ModuleWithProviders, NgModule } from "@angular/core";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

import { ErrorSnackBarComponent } from "./components/error-snack-bar/error-snack-bar.component";

import { SnackBarService } from "./services/snack-bar.service";

@NgModule({
  imports: [MatSnackBarModule, MatButtonModule],
  declarations: [ErrorSnackBarComponent],
})
export class SnackBarModule {
  static forRoot(): ModuleWithProviders<SnackBarModule> {
    return {
      ngModule: SnackBarModule,
      providers: [
        SnackBarService,
      ],
    };
  }
}
