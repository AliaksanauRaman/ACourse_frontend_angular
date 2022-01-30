import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Course } from '../../types/course.type';

@Component({
  selector: 'ac-courses-board',
  templateUrl: './courses-board.component.html',
  styleUrls: ['./courses-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesBoardComponent implements OnInit {
  @Input()
  public coursesList: Array<Course> = [];

  constructor() { }

  ngOnInit() { }
}
