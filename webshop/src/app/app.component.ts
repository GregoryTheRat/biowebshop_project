import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'main-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  loggedInUser?: firebase.default.User | null;

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null')); 
    });
  }
  
  constructor(private authService: AuthService){}

  logout() {
    this.authService.logout().then(() => {
      console.log("logged out successfully");
    }).catch(error => {
      console.error(error);
    });
  }
  
}
