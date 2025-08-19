import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, UserRole } from '../../../shared/entities';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Usuarios de prueba (en producción vendrían de la API)
  private mockUsers: User[] = [
    {
      id: '1',
      username: 'admin',
      email: 'admin@test.com',
      password: 'admin123',
      role: 'admin',
      fullName: 'Administrador Sistema'
    },
    {
      id: '2',
      username: 'usuario',
      email: 'usuario@test.com',
      password: 'user123',
      role: 'usuario',
      fullName: 'Usuario Regular'
    }
  ];

  constructor(private router: Router) {
    // Verificar si hay usuario logueado en localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(username: string, password: string): Observable<boolean> {
    const user = this.mockUsers.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getUserRole(): UserRole | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }
}
