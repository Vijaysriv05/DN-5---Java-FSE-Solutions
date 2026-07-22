import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Input() isEnrolled: boolean = false;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('CourseCardComponent ngOnChanges:', {
        previous: changes['course'].previousValue,
        current: changes['course'].currentValue
      });
    }
  }

  // Task 2 Step 32: Getters keep templates clean by encapsulating logical evaluations
  // within the TypeScript class rather than embedding complex expressions inside HTML.
  get cardClasses(): { [key: string]: boolean } {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderStyle(): { [key: string]: string } {
    let color = '#9e9e9e'; // default pending grey
    if (this.course?.gradeStatus === 'passed') color = '#4caf50'; // green
    if (this.course?.gradeStatus === 'failed') color = '#f44336'; // red
    return { 'border-left': `6px solid ${color}` };
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}
