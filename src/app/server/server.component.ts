import { Component } from "@angular/core";

@Component({
  selector : 'app-server',
  templateUrl: './server.component.html',
   styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverId: number = 10;
  serverName: string = 'Server Desetka';
  serverStatus: string = 'offline';  

  getServerStatus(): string {
    return this.serverStatus
  }
}