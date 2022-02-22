import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../api/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
})
export class DoctorProfilePage implements OnInit {

  doctorProfile:any=[];
  drInfo:any=[];
  availAppointments:any=[]
  drId=this.route.snapshot.params['id']

  constructor(private service: DoctorService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    // this.getDoctor();
    this.getDoctorById(this.route.snapshot.params['id']);
    this.getAvailableAppointments(this.route.snapshot.params['id'])
  }

  // getDoctor(){
  //   this.service.getDoctors().subscribe(res=>{
  //     this.doctorProfile = res;
  //     console.log(this.doctorProfile)
  //   });

   


  getAvailableAppointments(id:any) {
    this.service.getAvailableAppointmentsByDrId(id).subscribe(res=>{
      this.availAppointments =res; 
      console.log(this.availAppointments)
    })
  }


  getDoctorById(id:any){
    this.service.getDoctorById(id).subscribe(res=>{
      this.drInfo=res;
      console.log(this.drInfo);
      

    });
  }


  
};
