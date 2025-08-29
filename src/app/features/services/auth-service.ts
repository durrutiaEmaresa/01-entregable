import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../../../shared/entities';

interface LoginCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private mockUsers: User[] = [
    {
      id: 1,
      name: 'Admin',
      surname: 'User',
      fullName: 'Admin User',
      username: 'admin',
      password: '123456',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Regular',
      surname: 'User',
      fullName: 'Regular User',
      username: 'usuario',
      password: '123456',
      role: 'usuario'
    }
  ];

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.currentUserSubject.next(user);
    }
  }

  login(credentials: LoginCredentials): Observable<User> {
    const { username, password } = credentials;

    const user = this.mockUsers.find(u =>
      u.username === username && u.password === password
    );

    if (user) {
      return of(user).pipe(delay(1000));
    } else {
      return throwError(() => new Error('Credenciales incorrectas'));
    }
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  setCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }
}
