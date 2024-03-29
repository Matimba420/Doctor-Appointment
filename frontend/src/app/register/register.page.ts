import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { DoctorService } from '../api/doctor.service';
import { AdminService } from '../api/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public formBuilder: FormBuilder, private userService: UserService,private doctorService: DoctorService, private adminService:AdminService,private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  
  role:any ='client';
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
    if(response=='doctor'){
      this.role="doctor";
    }else if(response=='admin'){
      this.role="admin";
    }else{
      this.role="client"
    }

  

    
  }

  signIn(){
    console.log(this.loginForm.value)
    
    // this.userService.userLogin(this.loginForm.value)
    if(this.role=="client"){
        this.isloading=true;
        this.userService.userLogin(this.loginForm.value).subscribe({
          next:(data) =>{
            this.isloading=false;
            localStorage.setItem("access", JSON.stringify(data));
            console.log(data)
            this.router.navigateByUrl('/bookanimal',{replaceUrl:true});
          },
          
          error: (e) => (
            console.log(e),
             Swal.fire({  
              confirmButtonColor: "red",
              icon: 'error',  
              title: e.error.error,  
              footer: 'Please verifty your login credentials'}),
              this.isloading=false
          )
        
      });
  }else if(this.role=="doctor"){
    // console.log('doctor login')
    this.doctorService.doctorLogin(this.loginForm.value).subscribe({
      next:(data) =>{
        this.isloading=false;
        localStorage.setItem("doctorAccess", JSON.stringify(data));
        console.log(data)
        this.router.navigateByUrl('/dr-dashboard',{replaceUrl:true});
      },
      
      error: (e) => (
        console.log(e),
         Swal.fire({  
          confirmButtonColor: "red",
          icon: 'error',  
          title: e.error.error,  
          footer: 'Please verifty your login credentials'}),
          this.isloading=false
      )
  });
    
  }else{
    // alert("should be implemented for admin");
    // ************
    this.adminService.adminLogin(this.loginForm.value).subscribe({
      next:(data) =>{
        this.isloading=false;
        localStorage.setItem("adminAccess", JSON.stringify(data));
        console.log(data)
        this.router.navigateByUrl('/admin',{replaceUrl:true});
      },
      
      error: (e) => (
        console.log(e),
         Swal.fire({  
          confirmButtonColor: "red",
          icon: 'error',  
          title: e.error.error,  
          footer: 'Please verifty your login credentials'}),
          this.isloading=false
      )
  });
  // **************

  }
    

} 

  ngOnInit() {
    
  }

}
