import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { LessonPreview } from '../../types/lesson-preview.type';

@Component({
  selector: 'ac-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonsListComponent {
  @Input()
  public lessonsPreviews: Array<LessonPreview> = [];
}
