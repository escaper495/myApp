import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
        h1{
          text-align: center;
          color: red;
          }
  `]  //inline styling
})
export class AppComponent {
  title = 'myApp';
}
