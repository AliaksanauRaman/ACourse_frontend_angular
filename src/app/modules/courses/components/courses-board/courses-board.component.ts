import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { COURSES_SERVICE, ICoursesService } from '../../interfaces/courses-service.interface';
import { Course } from '../../types/course.type';

@Component({
  selector: 'ac-courses-board',
  templateUrl: './courses-board.component.html',
  styleUrls: ['./courses-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesBoardComponent {
  @Input()
  public coursesList: Array<Course> = [];

  constructor(
    @Inject(COURSES_SERVICE)
    private readonly coursesService: ICoursesService,
  ) { }

  public openAddCourseDialog(): void {
    this.coursesService.openAddCourseDialog();
  }
}
