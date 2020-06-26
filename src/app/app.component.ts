import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunev';

  calender(){
    console.log('calender appread')
  }

  register(){
    console.log('Registered');
  }
}
