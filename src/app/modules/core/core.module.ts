import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginFormCardComponent } from "./components/login-form-card/login-form-card.component";
import { AuthenticationService } from "./services/authentication.service";

import { SnackBarModule } from "../../shared/modules/snack-bar";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SnackBarModule.forRoot(),
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [LoginPageComponent, LoginFormComponent, LoginFormCardComponent],
  exports: [LoginPageComponent],
  providers: [AuthenticationService],
})
export class CoreModule {}
