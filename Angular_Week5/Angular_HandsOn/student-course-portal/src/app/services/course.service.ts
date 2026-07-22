import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  // Fallback initial data for offline / unit tests
  private initialCourses: Course[] = [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Web Development with Angular', code: 'CS202', credits: 3, gradeStatus: 'passed' },
    { id: 3, name: 'Database Management Systems', code: 'CS303', credits: 3, gradeStatus: 'pending' },
    { id: 4, name: 'Operating Systems', code: 'CS404', credits: 4, gradeStatus: 'failed' },
    { id: 5, name: 'Cloud Computing & DevOps', code: 'CS505', credits: 2, gradeStatus: 'passed' }
  ];

  constructor(private http: HttpClient) {}

  /**
   * Fetches all courses with map, tap, retry(2), and catchError operators.
   * Note: tap is used for side-effects (logging) so stream values remain unaltered,
   * while map is reserved strictly for transforming emitted items.
   */
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // Step 83: Filter courses with positive credits using map
      map(courses => courses.filter(c => c.credits > 0)),
      // Step 85: Side-effect logging via tap
      tap(courses => console.log('Courses loaded via HttpClient:', courses.length)),
      // Step 86: Retry strategy (retry up to 2 times on network failure)
      retry(2),
      // Step 84: Catch and transform HTTP error
      catchError(err => {
        console.error('CourseService HTTP error, falling back to local dataset:', err);
        // Fallback to local array if json-server is not running
        return of(this.initialCourses);
      })
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      retry(2),
      catchError(() => {
        const found = this.initialCourses.find(c => c.id === Number(id));
        return of(found);
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      catchError(err => {
        const newCourse: Course = { ...course, id: Date.now() };
        this.initialCourses.push(newCourse);
        return of(newCourse);
      })
    );
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(
      catchError(err => {
        const idx = this.initialCourses.findIndex(c => c.id === course.id);
        if (idx !== -1) this.initialCourses[idx] = course;
        return of(course);
      })
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        this.initialCourses = this.initialCourses.filter(c => c.id !== id);
        return of(void 0);
      })
    );
  }
}
