import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit(){
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then( cred => {
        console.log(cred);
        this.router.navigateByUrl('/');
    }).catch(error => {
      console.error(error);
    });  
    
  }
}
