import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="summary-widget">
      <h4>Course Summary Widget</h4>
      <p>Live Course Count: <strong>{{ courseCount }}</strong></p>
    </div>
  `,
  styles: [`
    .summary-widget {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
    }
  `]
})
export class CourseSummaryWidgetComponent implements OnInit {
  courseCount: number = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courseCount = courses.length;
    });
  }
}
