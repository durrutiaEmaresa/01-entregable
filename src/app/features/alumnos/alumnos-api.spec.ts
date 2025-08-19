import { TestBed } from '@angular/core/testing';
import { AlumnosAPI } from './alumnos-api';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlumnosAPI', () => {
  let service: AlumnosAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AlumnosAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
