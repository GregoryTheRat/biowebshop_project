import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void{}

 
  email: FormControl =  new FormControl('');
  password: FormControl =  new FormControl('');

  constructor(private router: Router, private authService: AuthService) { }
 
  async login(){
    this.authService.login(this.email.value, this.password.value).then(cred =>{
      console.log("successful login")
      console.log(cred.user);
      this.router.navigateByUrl('/');
    }).catch(error =>{
      console.log("error");
      console.error(error);
    });
  }


}
