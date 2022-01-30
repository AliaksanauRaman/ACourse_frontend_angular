import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesIndexPageComponent } from './pages/courses-index-page/courses-index-page.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';

const coursesRoutes: Routes = [
  { path: '', component: CoursesIndexPageComponent },
  { path: ':courseId', component: CoursePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }
