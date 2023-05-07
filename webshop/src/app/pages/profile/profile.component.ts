import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private userService: UserService){}

  myUserName?: string;
  newUser: any;
  

  ngOnInit(){
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.newUser = user;
  }

  

  changeForm: FormGroup = new FormGroup({
    username: new FormControl('')
  });

  onSubmit(){
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.newUser.username = this.changeForm.get('username')?.value;
    this.userService.update(user);
  }
}
