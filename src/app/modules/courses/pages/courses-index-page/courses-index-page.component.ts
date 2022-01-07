import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ICoursesIndexPageHttpService } from '../../interfaces/courses-index-page-http-service.interface';
import { COURSES_INDEX_PAGE_HTTP_SERVICE } from '../../tokens/courses-index-page-http-service.token';

@Component({
  selector: 'app-courses-index-page',
  templateUrl: './courses-index-page.component.html',
  styleUrls: ['./courses-index-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesIndexPageComponent implements OnInit {
  public readonly courses$ = this.coursesHttpService.getCourses();

  constructor(
    @Inject(COURSES_INDEX_PAGE_HTTP_SERVICE)
    private readonly coursesHttpService: ICoursesIndexPageHttpService,
  ) { }

  ngOnInit(): void {
  }

}
