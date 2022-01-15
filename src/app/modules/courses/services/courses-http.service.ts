import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { API_URL } from "../../../shared/injection-tokens/api-url";

import { ICoursesIndexPageHttpService } from "../interfaces/courses-index-page-http-service.interface";
import { Course } from "../types/course.type";

@Injectable()
export class CoursesHttpService implements ICoursesIndexPageHttpService {
  constructor(
    @Inject(API_URL) private readonly apiUrl: string,
    private readonly http: HttpClient,
  ) {}

  public getCourses(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(`${this.apiUrl}/api/courses`);
  }
}
