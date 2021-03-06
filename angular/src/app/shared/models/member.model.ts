// Class to represent a Member object

export class Member {

  _id: string;
  name: string;
  email: string;
  password: string;
  points: number;
  serviceHours: number;
  role: string;
  admin: boolean;
  code: string;
  absences: number;
  rushClass: string;
  picture: string;
  courses: Array<string>;
  linkedIn: string;
  github: string;
  gradSemester: string;
  major: string;
  description: string;
  color: Array<string>;

  constructor() { }

}
