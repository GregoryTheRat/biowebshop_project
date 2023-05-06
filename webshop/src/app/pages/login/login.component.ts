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
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/shop');
    }).catch(error => {
      console.error(error);
    });
  }
}
