import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { API_URL } from "../../../shared/injection-tokens/api-url";

import { ICoursePageHttpService } from "../interfaces/course-page-http-service.interface";
import { ICoursesIndexPageHttpService } from "../interfaces/courses-index-page-http-service.interface";

import { Course } from "../types/course.type";
import { CourseWithLessonsPreviews } from "../types/course-with-lessons-previews.type";

@Injectable()
export class CoursesHttpService implements ICoursesIndexPageHttpService, ICoursePageHttpService {
  constructor(
    @Inject(API_URL) private readonly apiUrl: string,
    private readonly http: HttpClient,
  ) {}

  public getCourses(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(`${this.apiUrl}/api/courses`);
  }

  public getCourseWithLessonsPreviewsById(courseId: string): Observable<CourseWithLessonsPreviews> {
    return this.http.get<CourseWithLessonsPreviews>(`${this.apiUrl}/api/courses/${courseId}/with-lessons-previews`);
  }
}
