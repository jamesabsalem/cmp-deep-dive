import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 1000);
  }

  ngOnDestroy(): void {}
}
