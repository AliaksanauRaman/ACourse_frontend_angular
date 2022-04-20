import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

import { CourseCardComponent } from './course-card.component';

import { Course } from '../../types/course.type';

// eslint-disable-next-line @typescript-eslint/naming-convention
const DEFAULT_COURSE: Course = {
  id: '1',
  title: 'test',
  description: 'desc',
  wantToImprove: true,
  createdAt: new Date(),
  modifiedAt: new Date(),
};

describe('Courses module: course-card component', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(waitForAsync(async () =>
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatCardModule],
      declarations: [CourseCardComponent],
      providers: [DatePipe],
    }).compileComponents(),
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = DEFAULT_COURSE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should throw at component initialization if course is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    component.course = (undefined as unknown) as Course;

    expect(() => component.ngOnInit()).toThrow(new Error('Course is not defined!'));
  });

  it('should render title with valid content', () => {
    const hostElement: unknown = fixture.debugElement.nativeElement;

    if (!(hostElement instanceof HTMLElement)) {
      throw new Error('An HTMLElement expected!');
    }

    const titleElement = hostElement.querySelector('.title');

    expect(titleElement?.textContent).toBe(DEFAULT_COURSE.title);
  });

  it('should render subtitle with valid content', () => {
    const hostElement: unknown = fixture.debugElement.nativeElement;

    if (!(hostElement instanceof HTMLElement)) {
      throw new Error('An HTMLElement expected!');
    }

    const datePipe = TestBed.inject(DatePipe);
    const subtitleElement = hostElement.querySelector('.subtitle');

    expect(subtitleElement?.textContent).toContain('Created:');
    expect(subtitleElement?.textContent).toContain(datePipe.transform(DEFAULT_COURSE.createdAt));
  });

  it('should render content with valid content', () => {
    const hostElement: unknown = fixture.debugElement.nativeElement;

    if (!(hostElement instanceof HTMLElement)) {
      throw new Error('An HTMLElement expected!');
    }

    const contentElement = hostElement.querySelector('.content');

    expect(contentElement?.textContent).toBe(DEFAULT_COURSE.description);
  });
});
