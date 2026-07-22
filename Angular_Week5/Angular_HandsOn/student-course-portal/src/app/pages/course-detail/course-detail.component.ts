import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  template: `
    <div class="detail-container">
      <a routerLink="/courses" class="back-link">&larr; Back to Courses</a>
      
      <div *ngIf="course; else notFound" class="detail-card">
        <h2>{{ course.name }} ({{ course.code }})</h2>
        <div class="info-grid">
          <p><strong>Course ID:</strong> {{ course.id }}</p>
          <p><strong>Credits:</strong> {{ course.credits | creditLabel }}</p>
          <p><strong>Status:</strong> <span class="badge" [ngClass]="course.gradeStatus">{{ course.gradeStatus }}</span></p>
        </div>
        <div class="syllabus-section">
          <h3>Course Description & Overview</h3>
          <p>
            This course covers foundational and advanced principles in {{ course.name }}.
            Students will participate in interactive lectures, hands-on lab projects, and assessment quizzes.
          </p>
        </div>
      </div>

      <ng-template #notFound>
        <div class="not-found-box">
          <h3>Course Not Found</h3>
          <p>The requested course ID could not be located in our portal database.</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .detail-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1.5rem;
    }
    .back-link {
      display: inline-block;
      margin-bottom: 1.5rem;
      color: #2563eb;
      text-decoration: none;
      font-weight: 600;
    }
    .detail-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin: 1.5rem 0;
      background: #f8fafc;
      padding: 1rem;
      border-radius: 8px;
    }
    .badge {
      text-transform: capitalize;
      font-weight: 600;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
    }
    .badge.passed { color: #16a34a; background: #dcfce7; }
    .badge.failed { color: #dc2626; background: #fee2e2; }
    .badge.pending { color: #475569; background: #f1f5f9; }
  `]
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.courseService.getCourseById(id).subscribe(c => {
        this.course = c;
      });
    }
  }
}
