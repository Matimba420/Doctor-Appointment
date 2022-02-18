import { Component, OnInit } from '@angular/core';
import { DrAppointmentPageModule } from './dr-appointment.module';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-dr-appointment',
  templateUrl: './dr-appointment.page.html',
  styleUrls: ['./dr-appointment.page.scss'],
})
export class DrAppointmentPage implements OnInit {

  date: any;


  constructor(public alertController: AlertController,public formBuilder: FormBuilder ) { }
  todayDate: String = new Date().toISOString();

  

  ngOnInit() {
    
    
  }
  

  setAvailability(): void
  {

    console.log('I am working');
    //console.log(datetime.value);
  

  }

  

}