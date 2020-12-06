import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10
  serverStatus: string = 'online'
  serverText: string = ' ' 
  userText: string = ''
  buttonText: boolean = true
  toggle:boolean = false
  click: number = 0
  arrayNum = []
  constructor() { //this is called when class is created
    this.serverId = 20;
  }
  onClicking() {
    this.serverId = 100;
  }
  onTypingName(event){
    this.serverText = event.target.value
  }
  checkButton(){
    if(this.userText.length > 0){
      return this.buttonText = true
    } else {
      return this.buttonText = false
    }
  }
  onReset(){
    this.userText = ''
  }
  onToggle(){
    if(this.toggle == false){
      this.toggle = true
    }else{
      this.toggle = false
    }
    this.click = this.click + 1
    this.arrayNum.push(new Date())
  }
}