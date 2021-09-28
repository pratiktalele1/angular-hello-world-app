import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to hello World app';
  head='Hello from BridgeLabz';
  imgUrl='https://www.educationworld.in/wp-content/uploads/2020/06/BridgeLabz-2.jpg';

  showSite(){
    window.open('https://www.bridgelabz.com/');
  }
}
