import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of, timeout } from 'rxjs';

import { CoursesHttpService } from './courses-http.service';
import { API_URL } from '../../../shared/injection-tokens/api-url';
import { Course } from '../types/course.type';

const ONE_SECOND_IN_MILLISECONDS = 1000;

// eslint-disable-next-line @typescript-eslint/naming-convention
const DEFAULT_COURSES: Array<Course> = [
  {
    id: '1',
    title: 'test-1',
    description: 'desc-1',
    wantToImprove: true,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: '2',
    title: 'test-2',
    description: 'desc-2',
    wantToImprove: false,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
];

describe('Courses module: courses-http service', () => {
  let service: CoursesHttpService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        CoursesHttpService,
        {
          provide: HttpClient,
          useValue: httpSpy,
        },
        {
          provide: API_URL,
          useValue: 'http://test',
        },
      ],
    });

    service = TestBed.inject(CoursesHttpService);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('should return expected courses', (done) => {
    const expectedCourses: Array<Course> = DEFAULT_COURSES.slice();

    httpSpy.get.and.returnValue(of(expectedCourses).pipe(timeout(ONE_SECOND_IN_MILLISECONDS)));

    service.getCourses().subscribe({
      next: courses => {
        expect(expectedCourses).toEqual(courses);
        done();
      },
      error: done.fail,
    });
  });
});
