import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email:  new FormControl(''),
    password:  new FormControl(''),
  });
  
  

  constructor(private router: Router, private authService: AuthService) { }
  //TODO: FIX, add validation?
  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.controls['email'].value , this.loginForm.controls['password'].value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/');
    }).catch(error => {
      console.error(error);
    });
    
  }


}
