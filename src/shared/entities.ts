export interface Student {
  id: string;
  name: string;
  surname: string;
  age: number;
  rut: number;
  average: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'usuario';
  fullName: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  credits: number;
  instructor: string;
}

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  enrollmentDate: Date;
  status: 'active' | 'inactive';
}

export type UserRole = 'admin' | 'usuario';
