import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) { }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.router.navigate(['/'])
  }
}
