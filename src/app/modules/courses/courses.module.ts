import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesIndexPageComponent } from './pages/courses-index-page/courses-index-page.component';
import { CoursesHttpService } from './services/courses-http.service';
import { COURSES_INDEX_PAGE_HTTP_SERVICE } from './tokens/courses-index-page-http-service.token';

@NgModule({
  declarations: [
    CoursesIndexPageComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
  ],
  providers: [
    CoursesHttpService,
    {
      provide: COURSES_INDEX_PAGE_HTTP_SERVICE,
      useExisting: CoursesHttpService,
    },
  ],
})
export class CoursesModule { }
