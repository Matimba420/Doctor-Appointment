import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../api/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
})
export class DoctorProfilePage implements OnInit {

  doctorProfile:any=[];
  drInfo:any=[];
  availAppointments:any=[]
  userDetails:any=JSON.parse(localStorage.getItem('access'));
  petName:any=JSON.parse(localStorage.getItem('pet_name'));
  drId=this.route.snapshot.params['id']

  constructor(private service: DoctorService, private router: Router, private route:ActivatedRoute,) { }

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

  bookAppointment(_obj: any){
    // const id = parseInt(req.params.id);
    // const {pet_name } = req.body;
    // const {user_id } = req.body;
    console.log(_obj)
    console.log(this.petName.pet_name)
    console.log(this.userDetails[0].id);
    const data={
      pet_name:this.petName.pet_name ,
      user_id: this.userDetails[0].id
    }

    this.service.makeAppointment(_obj,data).subscribe(res=>{
      console.log(res);
      Swal.fire('', res , 'success');
      this.router.navigate(['/profile']);
    });

  }

  
};
