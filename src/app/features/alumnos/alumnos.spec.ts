// filepath: c:\Users\durrutia\01-entregable\src\app\features\alumnos\alumnos.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alumnos } from './alumnos';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('Alumnos', () => {
  let component: Alumnos;
  let fixture: ComponentFixture<Alumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Alumnos,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
