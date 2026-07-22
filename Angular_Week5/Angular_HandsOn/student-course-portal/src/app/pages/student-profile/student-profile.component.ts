import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  template: `
    <div class="profile-container">
      <div class="profile-header">
        <div class="avatar">AJ</div>
        <div>
          <h2>Alice Johnson</h2>
          <p>Email: alice&#64;example.com | Major: Computer Science | GPA: 3.8</p>
        </div>
      </div>

      <h3>My Enrolled Courses</h3>
      <div *ngIf="enrolledCourses.length > 0; else noEnrolled" class="enrolled-list">
        <div *ngFor="let course of enrolledCourses" class="enrolled-item">
          <div>
            <h4>{{ course.name }}</h4>
            <span class="course-code">{{ course.code }}</span>
          </div>
          <div>
            <span>{{ course.credits | creditLabel }}</span>
          </div>
        </div>
      </div>

      <ng-template #noEnrolled>
        <div class="empty-box">
          <p>You have not enrolled in any courses yet.</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1.5rem;
    }
    .profile-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: white;
      padding: 1.8rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      margin-bottom: 2rem;
    }
    .avatar {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background: #2563eb;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    .enrolled-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .enrolled-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      padding: 1.2rem;
      border-radius: 8px;
      border-left: 4px solid #2563eb;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    }
    .enrolled-item h4 {
      margin: 0 0 0.3rem 0;
    }
    .course-code {
      font-size: 0.8rem;
      background: #e2e8f0;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }
    .empty-box {
      background: white;
      padding: 2rem;
      text-align: center;
      border-radius: 8px;
      color: #64748b;
    }
  `]
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getEnrolledCourses().subscribe(courses => {
      this.enrolledCourses = courses;
    });
  }
}
