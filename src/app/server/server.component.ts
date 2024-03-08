import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  standalone: true,
  templateUrl: './server.component.html',
  imports: [CommonModule],
  styles: [`
    .online{
      color:white;
    }
    `]
})
export class ServerComponent {
  serverId: number = 10
  serverStatus: string = 'offline'

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}