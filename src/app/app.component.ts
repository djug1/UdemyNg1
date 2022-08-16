import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'udemy-first-app';
  name : string = 'Davor';
  userName: string = '';

  resetUsername() {
    this.userName = '';
  }
}
