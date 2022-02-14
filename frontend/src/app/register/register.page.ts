import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  get form(){
    return this.registerForm.controls;
  }

  register(){
    this.userService.getUsers().subscribe((res: any)=>{
      console.log(res)
      //this.router.navigate['/profile']
    })
  }

  ngOnInit() {
  }

}
