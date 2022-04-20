import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ICoursesIndexPageHttpService, COURSES_INDEX_PAGE_HTTP_SERVICE } from '../../interfaces/courses-index-page-http-service.interface';

@Component({
  selector: 'ac-courses-index-page',
  templateUrl: './courses-index-page.component.html',
  styleUrls: ['./courses-index-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesIndexPageComponent {
  readonly courses$ = this.coursesHttpService.getCourses();

  constructor(
    @Inject(COURSES_INDEX_PAGE_HTTP_SERVICE)
    private readonly coursesHttpService: ICoursesIndexPageHttpService,
  ) {}
}
