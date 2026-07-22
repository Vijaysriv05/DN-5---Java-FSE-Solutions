import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="app-header">
      <div class="header-container">
        <h1 class="portal-title">Student Course Portal</h1>
        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/courses" routerLinkActive="active">Courses</a>
          <a routerLink="/enroll" routerLinkActive="active">Enroll (TD)</a>
          <a routerLink="/enroll-reactive" routerLinkActive="active">Enroll (Reactive)</a>
          <a routerLink="/profile" routerLinkActive="active">Profile</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .app-header {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      padding: 1rem 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .portal-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .nav-links {
      display: flex;
      gap: 1.2rem;
    }
    .nav-links a {
      color: #e0e0e0;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 0.8rem;
      border-radius: 6px;
      transition: all 0.2s ease;
    }
    .nav-links a:hover, .nav-links a.active {
      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class HeaderComponent {}
