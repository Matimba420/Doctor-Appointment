import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../api/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dr-dashboard',
  templateUrl: './dr-dashboard.page.html',
  styleUrls: ['./dr-dashboard.page.scss'],
})
export class DrDashboardPage implements OnInit {
  count = 1;
  doctor=localStorage.getItem('doctorAccess')

  constructor(private service: DoctorService, private router: Router, private route:ActivatedRoute,) {}

  loggedInDoctor= JSON.parse(localStorage.getItem('doctorAccess'));
  drList: any=[]
  //appointments:any=[];
  availAppointments:any=[]
  drID:any;
  ngOnInit() {
    if(this.doctor==null){
      this.router.navigateByUrl('/login',{replaceUrl:true});
    }

    this.getDoctorById();
    // console.log("dro " ,this.availAppointments);
    
    this.getAvailableAppointments(this.drID);

    let reload = localStorage.getItem('reload') as string;

    if( reload != null)
    {
      window.location.reload();
      localStorage.removeItem('reload');
    } 
   
  }

  getDoctorById(){
    this.drList = JSON.parse(localStorage.getItem('doctorAccess'));
   
    console.log("this is the dr list ",this.drList[0].id);
    this.drID = this.drList[0].id;
  }

  getAvailableAppointments(id:any) {
    this.service.getAvailableAppointmentsByDrId(id).subscribe(res=>{
      this.availAppointments =res; 
      console.log(this.availAppointments)
      // let reload = localStorage.getItem('reload') as string;

      // if( reload != null)
      // {
      //   window.location.reload();
      //   localStorage.removeItem('reload');
      // } 
    })
  }

  
  removeAppointment(id:any){
    console.log(id);
    console.log(this.availAppointments)
    

    Swal.fire({
      title: `Are you sure you want to cancel your appoint?`,
      text: `Once cancelled you will have to book another appointment should you want to book again!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      confirmButtonColor: "red",
      cancelButtonText: 'No, keep it',
      cancelButtonColor:'blue'
    }).then((result) => {

      if (result.isConfirmed) {
        this.service.removeAppointment(id).subscribe(res=>{
          Swal.fire('', res, 'success')
          console.log(res);
        });
        
        
        
        this.ngOnInit();
      } else if (result.isDismissed) {
        this.ngOnInit()
      }
    })
    
  }

}



function dr_id(dr_id: any) {
  throw new Error('Function not implemented.');
}
 