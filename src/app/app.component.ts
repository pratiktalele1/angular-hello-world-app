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
  userName;
  nameError;

  showSite(){
    window.open('https://www.bridgelabz.com/');
  }

  onInput($event){
    const regex=RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(regex.test($event.data)){
      this.nameError="";
    }else{
      this.nameError="INVALID NAME";
    }
  }
}
