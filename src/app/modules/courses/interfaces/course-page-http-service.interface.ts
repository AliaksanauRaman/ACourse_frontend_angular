import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

import { CourseWithLessonsPreviews } from "../types/course-with-lessons-previews.type";

export const COURSE_PAGE_HTTP_SERVICE = new InjectionToken<ICoursePageHttpService>("COURSE_PAGE_HTTP_SERVICE");

export interface ICoursePageHttpService {
  getCourseWithLessonsPreviewsById(courseId: string): Observable<CourseWithLessonsPreviews>;
}
