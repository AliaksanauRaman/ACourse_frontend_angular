import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsIndexPageComponent } from './pages/settings-index-page/settings-index-page.component';

const settingsRoutes: Routes = [
  { path: '', component: SettingsIndexPageComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(settingsRoutes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
