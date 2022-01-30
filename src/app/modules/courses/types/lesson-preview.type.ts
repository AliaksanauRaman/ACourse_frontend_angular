import { LessonType } from "../constants/lesson-type";

export type LessonPreview = Readonly<{
  id: string;
  title: string;
  type: LessonType;
  description: string;
  createdAt: Date;
  modifiedAt: Date;
}>;
