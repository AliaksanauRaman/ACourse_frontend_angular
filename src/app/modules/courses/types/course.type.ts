export type Course = Readonly<{
  id: string;
  title: string;
  description: string;
  wantToImprove: boolean;
  createdAt: Date;
  modifiedAt: Date;
}>;
