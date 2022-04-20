import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddCourseDialogComponent } from '../components/add-course-dialog/add-course-dialog.component';
import { ICoursesService } from '../interfaces/courses-service.interface';

@Injectable()
export class CoursesService implements ICoursesService {
  constructor(
    private readonly matDialog: MatDialog,
  ) {}

  openAddCourseDialog(): void {
    const dialogRef = this.matDialog.open(AddCourseDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
