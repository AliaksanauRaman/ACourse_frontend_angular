import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesIndexPageComponent } from './pages/courses-index-page/courses-index-page.component';
import { CoursesHttpService } from './services/courses-http.service';
import { COURES_HTTP_API_URL } from './tokens/courses-http-api-url.token';
import { COURSES_INDEX_PAGE_HTTP_SERVICE } from './tokens/courses-index-page-http-service.token';

@NgModule({
  declarations: [
    CoursesIndexPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoursesRoutingModule,
  ],
  providers: [
    CoursesHttpService,
    {
      provide: COURES_HTTP_API_URL,
      useValue: 'https://acourse-backend.herokuapp.com/api/courses'
    },
    {
      provide: COURSES_INDEX_PAGE_HTTP_SERVICE,
      useExisting: CoursesHttpService,
    },
  ],
})
export class CoursesModule { }
