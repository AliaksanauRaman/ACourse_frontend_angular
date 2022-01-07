import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatButtonModule],
  declarations: [LoginPageComponent, LoginFormComponent],
  exports: [LoginPageComponent],
})
export class CoreModule {}
