import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private authService: AuthService, 
    private userService: UserService) { }

  onSubmit(){
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then( cred => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid as string,
          email: this.signUpForm.get('email')?.value,
          username: this.signUpForm.get('username')?.value
        };
        this.userService.create(user).then(_ => {
          console.log("User added successfully");
        }).catch(error => {
          console.error(error);
        });
        this.router.navigateByUrl('/home');
    }).catch(error => {
      console.error(error);
    });  
    
  }
}
