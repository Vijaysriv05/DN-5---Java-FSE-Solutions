import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import * as CourseActions from '../../store/course/course.actions';
import * as CourseSelectors from '../../store/course/course.selectors';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import * as EnrollmentSelectors from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // Step 25: Loading flag
  isLoading: boolean = true;

  courses: Course[] = [];
  courses$: Observable<Course[]>;
  enrolledIds$: Observable<number[]>;

  selectedCourseId: number | null = null;
  errorMessage: string = '';
  searchTerm: string = '';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.courses$ = this.store.select(CourseSelectors.selectAllCourses);
    this.enrolledIds$ = this.store.select(EnrollmentSelectors.selectEnrolledIds);
  }

  ngOnInit(): void {
    // Step 25: Simulate loading delay of 1.5s
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    // Step 71: Read query parameter 'search'
    const searchParam = this.route.snapshot.queryParamMap.get('search');
    if (searchParam) {
      this.searchTerm = searchParam;
    }

    // Step 96: Dispatch NgRx load action
    this.store.dispatch(CourseActions.loadCourses());

    // Step 80: Subscribe to CourseService HTTP call
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        if (this.searchTerm) {
          this.courses = courses.filter(c =>
            c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        } else {
          this.courses = courses;
        }
      },
      error: (err) => {
        this.errorMessage = err.message || 'Failed to load courses';
      }
    });
  }

  /**
   * Step 26: trackBy improves DOM performance by allowing Angular to re-use
   * existing DOM nodes for unchanged items rather than re-rendering the whole list.
   */
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  // Step 23: Handle enrollment event from CourseCardComponent
  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
    if (this.enrollmentService.isEnrolled(courseId)) {
      this.enrollmentService.unenroll(courseId);
      this.store.dispatch(EnrollmentActions.unenrollFromCourse({ courseId }));
    } else {
      this.enrollmentService.enroll(courseId);
      this.store.dispatch(EnrollmentActions.enrollInCourse({ courseId }));
    }
  }

  // Step 70: Navigate to course detail
  onCardClick(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrollmentService.isEnrolled(courseId);
  }
}
