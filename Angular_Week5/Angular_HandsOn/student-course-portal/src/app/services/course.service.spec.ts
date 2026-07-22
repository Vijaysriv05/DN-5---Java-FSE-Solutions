import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Web Dev', code: 'CS202', credits: 3, gradeStatus: 'passed' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Step 110: verify no outstanding requests
    httpMock.verify();
  });

  // Step 107: Test getCourses HTTP GET call
  it('should fetch courses via GET', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Step 108: Test HTTP 500 error handling with retry strategy
  it('should handle HTTP error gracefully and return fallback dataset after retries', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBeGreaterThan(0);
    });

    // Initial call + 2 retries = 3 total requests
    const req1 = httpMock.expectOne('http://localhost:3000/courses');
    req1.flush('500 Server Error', { status: 500, statusText: 'Internal Error' });

    const req2 = httpMock.expectOne('http://localhost:3000/courses');
    req2.flush('500 Server Error', { status: 500, statusText: 'Internal Error' });

    const req3 = httpMock.expectOne('http://localhost:3000/courses');
    req3.flush('500 Server Error', { status: 500, statusText: 'Internal Error' });
  });
});
