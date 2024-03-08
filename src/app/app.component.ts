import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ServersComponent, WarningAlertComponent, SuccessAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
  showSecret = false;
  secretPassword = 'Secret Password = Tuna';
  log: any[] = [];

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
    // this.log.push(this.log.length + 1);
  }
}

bootstrapApplication(AppComponent)
