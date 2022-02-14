import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { UserService } from '../api/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../register/register.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    cell_no: new FormControl('',[Validators.required,Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  get form(){
    return this.registerForm.controls;
  }

  register(){
    this.userService.addUser(this.registerForm.value).subscribe((data: any)=>{
      console.log(data)
    })
    
  }

  ngOnInit() {
  }

}
