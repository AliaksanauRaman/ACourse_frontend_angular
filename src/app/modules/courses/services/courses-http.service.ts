import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICoursesIndexPageHttpService } from "../interfaces/courses-index-page-http-service.interface";
import { COURES_HTTP_API_URL } from "../tokens/courses-http-api-url.token";
import { Course } from "../types/course.type";

@Injectable()
export class CoursesHttpService implements ICoursesIndexPageHttpService {
  constructor(
    @Inject(COURES_HTTP_API_URL) private readonly coursesHttpApiUrl: string,
    private readonly http: HttpClient,
  ) {}

  public getCourses(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(this.coursesHttpApiUrl);
  }
}
