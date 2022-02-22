import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../api/doctor.service';

@Component({
  selector: 'app-booked-slot',
  templateUrl: './booked-slot.page.html',
  styleUrls: ['./booked-slot.page.scss'],
})
export class BookedSlotPage implements OnInit {

  filterTerm: String;
  bookedSlot: any[];
  show: boolean =true;

  constructor(private services: DoctorService) { }

  ngOnInit() {
    this.getBookedAppointmentsBydrId();
  }


    getBookedAppointmentsBydrId(){
      this.services.getBookedAppointmentsBydrId(id).subscribe(res=>{
        this.bookedSlot = res;
        console.log('i am working')
      })

  }

  
}
function id(id: any) {
  throw new Error('Function not implemented.');
}

