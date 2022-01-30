import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsUserAuthenticatedGuard } from './modules/core/guards/is-user-authenticated.guard';
import { IsUserNotAuthenticatedGuard } from './modules/core/guards/is-user-not-authenticated.guard';

import { LayoutPageComponent } from './modules/core/pages/layout-page/layout-page.component';
import { LoginPageComponent } from './modules/core/pages/login-page/login-page.component';

const appChildRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/courses',
  },
  {
    path: 'courses',
    canActivate: [IsUserAuthenticatedGuard],
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
  }
];

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: appChildRoutes,
  },
  {
    path: 'login',
    canActivate: [IsUserNotAuthenticatedGuard],
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
