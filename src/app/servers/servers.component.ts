import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: [app-servers]    //selektor se čita kao atribut
  //selector: '.app-servers'  //selektor se čita kao css class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  btnDisabled: boolean = true;
  serverCreationStatus = "No server was created";
  serverName : string = '';

  constructor() { 
    setTimeout(() => {
      this.btnDisabled = this.btnDisabled === false ? true : false;
    },2000);
  }

  ngOnInit(): void {
  }

  onServerCreate() {
    this.serverCreationStatus = "Server is created, server name is "+ this.serverName;
  }

  onServerNameChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
