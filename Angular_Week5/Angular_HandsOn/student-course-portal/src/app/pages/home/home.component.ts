import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { NotificationComponent } from '../../components/notification/notification.component';

/**
 * Task 1 Step 15: Property Binding [property] vs Two-Way Binding [(ngModel)]
 * - [property] (One-Way: Component -> DOM): Data flows from the TypeScript component class to the DOM target property.
 *   Changes in DOM inputs do not update the component class property automatically.
 * - [(ngModel)] (Two-Way: DOM <-> Component): Data flows bi-directionally between component class and DOM.
 *   It is shorthand for [ngModel]="prop" (ngModelChange)="prop = $event", updating the property on DOM input changes.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseSummaryWidgetComponent, NotificationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Step 11: String interpolation property
  portalName: string = 'Student Course Portal';

  // Step 12: Property binding for button disabled state
  isPortalActive: boolean = true;

  // Step 13: Event binding handler message
  message: string = '';

  // Step 14: Two-way binding property
  searchTerm: string = '';

  courseCount: number = 12;

  constructor(private courseService: CourseService) {}

  // Step 16: Lifecycle hook ngOnInit
  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe(courses => {
      this.courseCount = courses.length;
    });
  }

  // Step 17: Lifecycle hook ngOnDestroy
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Step 13: Event handler
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
