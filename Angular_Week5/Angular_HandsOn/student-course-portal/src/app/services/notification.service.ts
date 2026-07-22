import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private instanceId = Math.floor(Math.random() * 10000);

  getInstanceId(): number {
    return this.instanceId;
  }

  notify(message: string): void {
    console.log(`[NotificationService #${this.instanceId}] ${message}`);
  }
}
