import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { DoctorService } from '../api/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private clientService: UserService,private doctorService: DoctorService) { }
  numClients:any;
  numDoctors:any;
  numAppointments:any;
  clients:any=[];
  doctors:any=[];


  ngOnInit() {
    this.getClients();
    this.getDoctors();
    // console.log(this.clients);
    
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


  
  }
