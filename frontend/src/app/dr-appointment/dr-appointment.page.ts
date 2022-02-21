import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-dr-appointment',
  templateUrl: './dr-appointment.page.html',
  styleUrls: ['./dr-appointment.page.scss'],
})
export class DrAppointmentPage implements OnInit {

  date: any;


 constructor(private toastCtrl: ToastController) { }

 async showToast(){
   await this.toastCtrl.create({
     message: "Availability updated!",
     duration:2000,
     buttons:[{
       text: 'Ok',
       handler: ()=>{
       console.log('staus:200');
         
       }
     }]

   }).then(res => res.present()
   );

 }
 
  todayDate: String = new Date().toISOString();
  chosenDate: string;
  myTime: string;




  ngOnInit() {}


 

    public myDate;

    setAvailability() {
    //console.log(this.myDate);
    this.myTime = this.myDate.substr(0, 10);
    this.chosenDate = this.myDate.substr(11, 5);
    console.log(this.myTime);
    console.log('time= ' + this.chosenDate);
    this.showToast();

    

  
    

  }



}