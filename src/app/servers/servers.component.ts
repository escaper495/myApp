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
  constructor() {
    setTimeout(()=>{
      this.allowServer = true;
    },2000);
   }

  ngOnInit() {
  }

}
