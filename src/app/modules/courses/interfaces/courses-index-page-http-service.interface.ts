import { Observable } from 'rxjs';
import { Course } from '../types/course.type';
import { InjectionToken } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const COURSES_INDEX_PAGE_HTTP_SERVICE = new InjectionToken<ICoursesIndexPageHttpService>('COURSES_INDEX_PAGE_HTTP_SERVICE');

export interface ICoursesIndexPageHttpService {
  getCourses: () => Observable<Array<Course>>;
}
