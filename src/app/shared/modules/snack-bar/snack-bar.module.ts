import { ModuleWithProviders, NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';

import { ErrorSnackBarComponent } from "./components/error-snack-bar/error-snack-bar.component";

import { SnackBarService } from "./services/snack-bar.service";

@NgModule({
  imports: [MatButtonModule],
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
