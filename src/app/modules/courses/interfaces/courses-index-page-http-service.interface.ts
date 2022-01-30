import { Observable } from "rxjs";
import { Course } from "../types/course.type";
import { InjectionToken } from "@angular/core";

export const COURSES_INDEX_PAGE_HTTP_SERVICE = new InjectionToken<ICoursesIndexPageHttpService>('COURSES_INDEX_PAGE_HTTP_SERVICE');

export interface ICoursesIndexPageHttpService {
  getCourses: () => Observable<Array<Course>>;
}
