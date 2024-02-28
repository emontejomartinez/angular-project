import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent, FormsModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Server Test';
  username = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
