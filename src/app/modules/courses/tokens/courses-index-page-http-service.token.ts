import { InjectionToken } from "@angular/core";
import { ICoursesIndexPageHttpService } from "../interfaces/courses-index-page-http-service.interface";

export const COURSES_INDEX_PAGE_HTTP_SERVICE = new InjectionToken<ICoursesIndexPageHttpService>('COURSES_INDEX_PAGE_HTTP_SERVICE');
