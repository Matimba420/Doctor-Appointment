import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { DoctorService } from '../api/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public formBuilder: FormBuilder, private userService: UserService,private doctorService: DoctorService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  isClient:boolean =true;
  isloading:boolean=false;

  get Form(){
    return this.loginForm.controls;
  }

  register(){
    
      this.userService.getUsers().subscribe((res: any)=>{
        console.log(res)
        //this.router.navigate['/profile']
      })
  
  }

  onServiceSelect(e){
    let response =e.detail.value;
    if(response=='no'){
      this.isClient=false;
    }else{
      this.isClient=true;
    }

    
  }

  signIn(){
    console.log(this.loginForm.value)
    
    // this.userService.userLogin(this.loginForm.value)
    if(this.isClient==true){
        this.isloading=true;
        this.userService.userLogin(this.loginForm.value).subscribe({
          next:(data) =>{
            this.isloading=false;
            localStorage.setItem("access", JSON.stringify(data));
            console.log(data)
            this.router.navigateByUrl('/profile',{replaceUrl:true});
          },
          
          error: (e) => (
            console.log(e),
             Swal.fire({  
              confirmButtonColor: "red",
              icon: 'error',  
              title: e.error,  
              footer: 'Please verifty your login credentials'}),
              this.isloading=false
          )
        
      });
  }else{
    // console.log('doctor login')
    this.doctorService.doctorLogin(this.loginForm.value).subscribe({
      next:(data) =>{
        this.isloading=false;
        localStorage.setItem("doctorAccess", JSON.stringify(data));
        console.log(data)
        this.router.navigateByUrl('/doctor-profile',{replaceUrl:true});
      },
      
      error: (e) => (
        console.log(e),
         Swal.fire({  
          confirmButtonColor: "red",
          icon: 'error',  
          title: e.error,  
          footer: 'Please verifty your login credentials'}),
          this.isloading=false
      )
    
  });
    
  }
    

  }

  ngOnInit() {
    
  }

}
