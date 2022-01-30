import { Course } from "./course.type";
import { LessonPreview } from "./lesson-preview.type";

export type CourseWithLessonsPreviews = Course & Readonly<{
  lessonsPreviews: Array<LessonPreview>;
}>;
