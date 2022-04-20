import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ac-add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrls: ['./add-course-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseDialogComponent {
}
