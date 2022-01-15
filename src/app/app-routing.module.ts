import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsUserAuthenticatedGuard } from './modules/core/guards/is-user-authenticated.guard';
import { IsUserNotAuthenticatedGuard } from './modules/core/guards/is-user-not-authenticated.guard';

import { LoginPageComponent } from './modules/core/pages/login-page/login-page.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/courses',
  },
  {
    path: 'login',
    canActivate: [IsUserNotAuthenticatedGuard],
    component: LoginPageComponent,
  },
  {
    path: 'courses',
    canActivate: [IsUserAuthenticatedGuard],
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
