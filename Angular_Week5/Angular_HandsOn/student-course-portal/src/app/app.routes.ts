import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./features/enrollment/courses-layout.component').then(m => m.CoursesLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/course-list/course-list.component').then(m => m.CourseListComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/course-detail/course-detail.component').then(m => m.CourseDetailComponent)
      }
    ]
  },
  {
    path: 'enroll',
    loadComponent: () => import('./pages/enrollment-form/enrollment-form.component').then(m => m.EnrollmentFormComponent),
    canActivate: [authGuard]
  },
  {
    path: 'enroll-reactive',
    loadComponent: () => import('./pages/reactive-enrollment-form/reactive-enrollment-form.component').then(m => m.ReactiveEnrollmentFormComponent),
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/student-profile/student-profile.component').then(m => m.StudentProfileComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];

