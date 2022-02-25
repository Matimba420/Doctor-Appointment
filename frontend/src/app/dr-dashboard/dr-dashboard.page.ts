import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../api/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dr-dashboard',
  templateUrl: './dr-dashboard.page.html',
  styleUrls: ['./dr-dashboard.page.scss'],
})
export class DrDashboardPage implements OnInit {

  constructor(private service: DoctorService,) { }
  loggedInDoctor= JSON.parse(localStorage.getItem('doctorAccess'));
  drList: any=[]
  appointments:any=[];
  //drId=this.route.snapshot.params['id'];

  ngOnInit() {

    this.getDoctorById();
   // this.getAvailableAppointments(this.route.snapshot.params['id']);
   // this.getAvailableAppointments(id);
  }

  getDoctorById(){
    this.drList = JSON.parse(localStorage.getItem('doctorAccess'));
   // this.drList=this.drList[0].value;
      console.log(this.drList.id)
  }

  getAvailableAppointments(id:any) {
    //this.drList = JSON.parse(localStorage.getItem('doctorAccess'));
    this.service.getAvailableAppointmentsByDrId(id).subscribe(res=>{
    this.appointments =res;
    console.log("Inside")
      console.log(this.appointments)
    })
  }

}
 