import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { DoctorService } from '../api/doctor.service';

import { FormGroup, FormBuilder, Validators, FormControl,FormsModule } from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private formBuilder: FormBuilder,private clientService: UserService,private doctorService: DoctorService) { }
  numClients:any;
  numDoctors:any;
  numAppointments:any;
  clients:any=[];
  doctors:any=[];
  appointments:any=[];
  counter=1;

  clientForm: boolean = false;

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


  ngOnInit() {
    this.getClients();
    this.getDoctors();
    this.getAppointments();
    
  }

  getClients(){
    this.clientService.getUsers().subscribe((res: any)=>{
      console.log(res)
      this.clients=res;
      this.numClients=this.clients.length;
      console.log('num clients: '+this.numClients);
      
      //this.router.navigate['/profile']
    })
  }

  getDoctors(){
    this.doctorService.getDoctors().subscribe((res: any)=>{
      console.log(res)
      this.doctors=res;
      this.numDoctors=this.doctors.length;
      console.log('num clients: '+this.numDoctors);
      
      //this.router.navigate['/profile']
    })
  }

  getAppointments(){
    this.doctorService.getAppointments().subscribe((res:any)=>{
      
      this.appointments=res
      console.log(res);
    })
    
  }

  removeClientById(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "The client will be removed from the table!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: "red",
      cancelButtonText: 'No, keep it',
      cancelButtonColor:'blue'
    }).then((result) => {

      if (result.isConfirmed) {
        this.clientService.removeUserById(id).subscribe(res=>{
          // console.log(res)
          this.ngOnInit();
        })
        
        Swal.fire('', 'User successfully deleted', 'success')
        this.ngOnInit();
      } else if (result.isDismissed) {
        this.ngOnInit()
      }
    })
  }

  removeDoctorById(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "Doctor will be removed from the table!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: "red",
      cancelButtonText: 'No, keep it',
      cancelButtonColor:'blue'
    }).then((result) => {

      if (result.isConfirmed) {
        this.doctorService.removeDoctorById(id).subscribe(res=>{
          // console.log(res)
          this.ngOnInit();
        })
        
        Swal.fire('', 'User successfully deleted', 'success')
        this.ngOnInit();
      } else if (result.isDismissed) {
        this.ngOnInit()
      }
    })
  }

  openClientForm(){
    this.clientForm = !this.clientForm
  }

  register(){
    // this.userService.addUser(this.registerForm.value).subscribe((data: any)=>{
    //   console.log(data)
    //   this.router.navigate(['/login']);
    // })

    this.clientService.addUser(this.registerForm.value).subscribe({
      next:(data) =>{
        console.log(data)
        Swal.fire('', 'User successfully Added', 'success')
        
      },
      error: (e) => (
        console.log(e),
         Swal.fire({  
          confirmButtonColor: "red",
          icon: 'error',  
          title: e.error.error,  
          })
      )
    
  });
    }
  
  }
