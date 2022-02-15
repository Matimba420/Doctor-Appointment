import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../register/register.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    cell_no: new FormControl('',[Validators.required,Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    
  })
  
  get Form(){
    return this.registerForm.controls;
  }

  register(){
    // this.userService.addUser(this.registerForm.value).subscribe((data: any)=>{
    //   console.log(data)
    //   this.router.navigate(['/login']);
    // })

    this.userService.addUser(this.registerForm.value).subscribe({
      next:(data) =>{
        console.log(data)
        this.router.navigate(['/login']);
      }
    
    });
    }

    

  ngOnInit() {
    
  }

}
