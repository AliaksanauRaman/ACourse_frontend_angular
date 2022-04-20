import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COURSE_PAGE_HTTP_SERVICE, ICoursePageHttpService } from '../../interfaces/course-page-http-service.interface';

type UrlParams = Readonly<{
  courseId: string;
}>;

@Component({
  selector: 'ac-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePageComponent {
  readonly courseWithLessonsPreviews$ = this.coursePageHttpService
    .getCourseWithLessonsPreviewsById(
      this.getUrlParams().courseId,
    );

  constructor(
    @Inject(COURSE_PAGE_HTTP_SERVICE)
    private readonly coursePageHttpService: ICoursePageHttpService,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  private getUrlParams(): UrlParams {
    const activatedRouteUrlParams = this.activatedRoute.snapshot.params;

    if (typeof activatedRouteUrlParams['courseId'] !== 'string') {
      throw new Error('\'courseId\' url parameter is missing!');
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return activatedRouteUrlParams as UrlParams;
  }
}
