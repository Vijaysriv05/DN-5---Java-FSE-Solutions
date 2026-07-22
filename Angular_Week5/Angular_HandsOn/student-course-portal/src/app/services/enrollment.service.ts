import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CourseService } from './course.service';
import { Course, Enrollment, Student } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private readonly STORAGE_KEY = 'enrolledCourseIds';
  private enrolledCourseIds: number[] = this.loadFromStorage();
  private apiUrl = 'http://localhost:3000/enrollments';

  constructor(private courseService: CourseService, private http: HttpClient) {}

  private loadFromStorage(): number[] {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return saved ? JSON.parse(saved) : [1, 2];
    } catch {
      return [1, 2];
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.enrolledCourseIds));
    } catch (e) {
      console.error('Error saving enrollment to localStorage:', e);
    }
  }

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
      this.saveToStorage();
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
    this.saveToStorage();
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourseIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.courseService.getCourses().pipe(
      map(courses => courses.filter(c => this.enrolledCourseIds.includes(c.id)))
    );
  }

  /**
   * Step 87: Chaining requests with switchMap.
   * switchMap cancels the previous inner Observable subscription if a new courseId
   * is emitted before the HTTP request completes, preventing race conditions and stale responses.
   */
  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return of(courseId).pipe(
      switchMap(id =>
        this.http.get<Enrollment[]>(`${this.apiUrl}?courseId=${id}`).pipe(
          map(enrollments =>
            enrollments.map((e, idx) => ({
              id: 100 + idx,
              name: e.studentName,
              email: e.studentEmail,
              gpa: 3.8,
              enrolledCount: 1
            }))
          )
        )
      )
    );
  }

  submitEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    this.enroll(enrollment.courseId);
    return this.http.post<Enrollment>(this.apiUrl, enrollment);
  }
}
