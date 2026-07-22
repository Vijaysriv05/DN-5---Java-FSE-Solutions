import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page or route you are looking for does not exist in the Student Course Portal.</p>
      <a routerLink="/" class="btn-home">Return to Home</a>
    </div>
  `,
  styles: [`
    .not-found-container {
      text-align: center;
      padding: 4rem 1.5rem;
      max-width: 600px;
      margin: 0 auto;
    }
    h1 {
      font-size: 5rem;
      color: #ef4444;
      margin: 0;
    }
    h2 {
      color: #1e293b;
      margin: 0.5rem 0 1rem 0;
    }
    p {
      color: #64748b;
      margin-bottom: 2rem;
    }
    .btn-home {
      display: inline-block;
      background: #2563eb;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
    }
  `]
})
export class NotFoundComponent {}
