import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.warn('HTTP 401 Unauthorized encountered - navigating to home');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('HTTP 500 Internal Server Error encountered:', error.message);
        alert('Server error (500). Please try again later.');
      }
      return throwError(() => error);
    })
  );
};
