import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Course } from '../../types/course.type';

@Component({
  selector: 'ac-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnInit {
  @Input()
  course?: Course;

  ngOnInit(): void {
    if (this.course === undefined) {
      throw new Error('Course is not defined!');
    }
  }
}
