import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

import { CourseCardComponent } from './course-card.component';

import { Course } from '../../types/course.type';

const DEFAULT_COURSE: Course = {
  id: "1",
  title: "test",
  description: "desc",
  wantToImprove: true,
  createdAt: new Date(),
  modifiedAt: new Date(),
};

describe("Courses module: course-card component", () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(waitForAsync(() => 
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
  
  it("should create", () => {
    expect(component).toBeDefined();
  });

  it("should throw at component initialization if course is undefined", () => {
    component.course = undefined as any;

    expect(() => component.ngOnInit()).toThrow(new Error("Course is not defined!"));
  });

  it("should render title with valid content", () => {
    const titleElement: HTMLElement | null = fixture.nativeElement.querySelector(".title");

    expect(titleElement?.textContent).toBe(DEFAULT_COURSE.title);
  });

  it("should render subtitle with valid content", () => {
    const datePipe = TestBed.inject(DatePipe);
    const subtitleElement: HTMLElement | null = fixture.nativeElement.querySelector(".subtitle");

    expect(subtitleElement?.textContent).toContain("Created:");
    expect(subtitleElement?.textContent).toContain(datePipe.transform(DEFAULT_COURSE.createdAt));
  });

  it("should render content with valid content", () => {
    const contentElement: HTMLElement | null = fixture.nativeElement.querySelector(".content");

    expect(contentElement?.textContent).toBe(DEFAULT_COURSE.description);
  });
});
