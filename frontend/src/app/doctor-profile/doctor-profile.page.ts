import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../api/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
})
export class DoctorProfilePage implements OnInit {

  doctorProfile:any=[];

  constructor(private service: DoctorService) { }

  ngOnInit() {
    this.getDoctor();
  }

  getDoctor(){
    this.service.getDoctors().subscribe(res=>{
      this.doctorProfile = res;
      console.log(this.doctorProfile)
    });

   
  }

  getAvailableAppointments() {
    this.service.getAvailableAppointments().subscribe(res=>{
      this.doctorProfile =res; 
      console.log(this.getAvailableAppointments)
    })
  }
};
