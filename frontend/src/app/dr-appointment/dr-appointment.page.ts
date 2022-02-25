import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { DoctorService } from '../api/doctor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dr-appointment',
  templateUrl: './dr-appointment.page.html',
  styleUrls: ['./dr-appointment.page.scss'],
})
export class DrAppointmentPage implements OnInit {

  date: any;
  loggedInDoctor= JSON.parse(localStorage.getItem('doctorAccess'));
  data:any=[]
  todayDate: String = new Date().toISOString();
  chosenDate: string;
  myTime: string;


 constructor(private toastCtrl: ToastController,private doctorService:DoctorService, private router:Router ) { }

 async showToast(){
   await this.toastCtrl.create({
     message: "Availability updated!",
     duration:2000,
     position: 'middle',
     buttons:[{
       text: 'Ok',
       handler: ()=>{
       console.log('staus:200');
         
       }
     }]

   }).then(res => res.present()
   );

 }
 
  




  ngOnInit() {
    console.log(this.loggedInDoctor);
    console.log(this.loggedInDoctor[0].id);

    
  }


 

    public myDate;

    setAvailability() {
    //console.log(this.myDate);
    this.chosenDate = this.myDate.substr(0, 10);
    this.myTime = this.myDate.substr(11, 5);
    console.log(this.myTime);
    console.log('time= ' + this.chosenDate);
    this.showToast();

    this.data={
      dr_id:this.loggedInDoctor[0].id,
      time_slot:this.myTime,
      appoint_date:this.chosenDate
    }
    this.setAppointment(this.data);

    console.log(this.data);
    

  }
  

  
  
   setAppointment(data:any){
    this.doctorService.newAppointment(data).subscribe((res: any)=>{
      console.log(res)
      this.router.navigate(['/dr-dashboard'])
    })

  }


}