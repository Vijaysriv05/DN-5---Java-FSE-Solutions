import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';
import { vi, describe, it, expect, beforeEach } from 'vitest';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Step 102: Should create test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: Input rendering test
  it('should render course name in h3 element', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const titleEl = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleEl.textContent).toContain('Data Structures');
  });

  // Step 104: Output event emission test
  it('should emit enrollRequested with courseId when enroll button is clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const spy = vi.spyOn(component.enrollRequested, 'emit');

    const enrollBtn = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    enrollBtn.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(1);
  });

  // Step 105: ngOnChanges test
  it('should log previous and current values in ngOnChanges', () => {
    const spy = vi.spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });

    expect(spy).toHaveBeenCalledWith(
      'CourseCardComponent ngOnChanges:',
      expect.objectContaining({
        current: mockCourse
      })
    );
  });
});
