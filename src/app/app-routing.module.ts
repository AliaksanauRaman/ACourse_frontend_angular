import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsUserAuthenticatedGuard } from './modules/core/guards/is-user-authenticated.guard';
import { IsUserNotAuthenticatedGuard } from './modules/core/guards/is-user-not-authenticated.guard';

import { IndexPageComponent } from './modules/core/pages/index-page/index-page.component';
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
    component: IndexPageComponent,
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
