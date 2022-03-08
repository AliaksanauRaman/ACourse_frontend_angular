import { InjectionToken } from "@angular/core";

export const COURSES_SERVICE = new InjectionToken("COURSES_SERVICE");

export interface ICoursesService {
  openAddCourseDialog(): void;
}
