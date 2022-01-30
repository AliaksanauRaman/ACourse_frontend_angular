import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesIndexPageComponent } from './pages/courses-index-page/courses-index-page.component';
import { CoursesHttpService } from './services/courses-http.service';
import { COURSES_INDEX_PAGE_HTTP_SERVICE } from './interfaces/courses-index-page-http-service.interface';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CoursesBoardComponent } from './components/courses-board/courses-board.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { COURSE_PAGE_HTTP_SERVICE } from './interfaces/course-page-http-service.interface';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';

@NgModule({
  declarations: [
    CourseCardComponent,
    CoursesBoardComponent,
    LessonsListComponent,
    CoursesIndexPageComponent,
    CoursePageComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CoursesRoutingModule,
  ],
  providers: [
    CoursesHttpService,
    {
      provide: COURSES_INDEX_PAGE_HTTP_SERVICE,
      useExisting: CoursesHttpService,
    },
    {
      provide: COURSE_PAGE_HTTP_SERVICE,
      useExisting: CoursesHttpService,
    }
  ],
})
export class CoursesModule { }
