import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: [app-servers]    //selektor se čita kao atribut
  //selector: '.app-servers'  //selektor se čita kao css class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
