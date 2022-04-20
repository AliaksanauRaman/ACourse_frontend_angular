import { InjectionToken } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const COURSES_SERVICE = new InjectionToken('COURSES_SERVICE');

export interface ICoursesService {
  openAddCourseDialog(): void;
}
