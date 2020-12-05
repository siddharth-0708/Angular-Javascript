import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10
  serverStatus: string = 'online'
  constructor() { //this is called when class is created
    this.serverId = 20;
  }
  onClicking() {
    this.serverId = 100;
  }
}