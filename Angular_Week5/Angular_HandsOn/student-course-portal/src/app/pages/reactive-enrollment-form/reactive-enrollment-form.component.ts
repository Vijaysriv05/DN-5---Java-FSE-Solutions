import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

/**
 * Step 53: Custom synchronous validator to disallow course codes starting with 'XX'
 */
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '');
  if (value.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

/**
 * Step 55: Custom async validator simulating an email check endpoint
 */
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = String(control.value || '').toLowerCase();
      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

/**
 * Task 1 Step 52: Difference between enrollForm.value vs enrollForm.getRawValue()
 * - enrollForm.value: Returns a JSON object containing values of enabled form controls only. Disabled controls are omitted.
 * - enrollForm.getRawValue(): Returns a JSON object containing values of ALL controls (both enabled and disabled).
 */
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Step 49: Build reactive form structure
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  /**
   * Step 57: Typed getter for FormArray.
   * Using a getter provides strong typing (FormArray) in TypeScript and prevents
   * expensive type casting syntax (e.g. `$any()`) inside component HTML templates.
   */
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourseControl(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourseControl(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    console.log('Reactive Form Value:', this.enrollForm.value);
    console.log('Reactive Form Raw Value (includes disabled):', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.isSubmitted = true;
    }
  }

  onReset(): void {
    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.isSubmitted = false;
  }
}
