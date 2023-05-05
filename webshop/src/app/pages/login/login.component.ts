import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['/'])
  }


}