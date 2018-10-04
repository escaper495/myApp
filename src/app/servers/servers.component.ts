import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', attribute selecor
  //selector:'.app-servers', class selector
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = "no server created";
  serverName = "";
  flag = false;
  servers = ["test1", "test2"];

  constructor() {
    setTimeout(()=>{
      this.allowServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.flag = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server created. Name is " + this.serverName;
  }

  //   Event Binding
  /* onUpdateServer(event : Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  } */

}
