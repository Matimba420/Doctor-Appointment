import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../api/doctor.service';

@Component({
  selector: 'app-drlist',
  templateUrl: './drlist.page.html',
  styleUrls: ['./drlist.page.scss'],
})
export class DrlistPage implements OnInit {
  

  constructor(private service: DoctorService) { }

  ngOnInit() {
    this.getDoctor();
  }

  getDoctor(){
    console.log(this.service.getDoctors());
  }

}
