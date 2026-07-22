import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

/**
 * Step 67: Component-level providers:
 * Providing NotificationService inside the @Component decorator creates a new, separate service instance
 * scoped specifically to this component instance (and any child components).
 * Unlike providedIn: 'root' (which creates a singleton shared across the entire app),
 * component-level providers ensure isolated state per component instance.
 */
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  template: `
    <div class="notification-box">
      <p>Component-Scoped Notification Service Instance ID: <strong>#{{ instanceId }}</strong></p>
    </div>
  `,
  styles: [`
    .notification-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 0.8rem;
      border-radius: 6px;
      margin-top: 0.5rem;
      font-size: 0.85rem;
      color: #1e40af;
    }
  `]
})
export class NotificationComponent implements OnInit {
  instanceId!: number;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.instanceId = this.notificationService.getInstanceId();
    this.notificationService.notify('NotificationComponent initialized with isolated service instance.');
  }
}
