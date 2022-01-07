import { Observable } from "rxjs";
import { Course } from "../types/course.type";

export interface ICoursesIndexPageHttpService {
  getCourses: () => Observable<Array<Course>>;
}
