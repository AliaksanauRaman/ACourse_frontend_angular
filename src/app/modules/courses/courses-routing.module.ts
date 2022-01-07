import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesIndexPageComponent } from './pages/courses-index-page/courses-index-page.component';

const coursesRoutes: Routes = [
  { path: '', component: CoursesIndexPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }
