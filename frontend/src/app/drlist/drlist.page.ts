import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../api/doctor.service';

@Component({
  selector: 'app-drlist',
  templateUrl: './drlist.page.html',
  styleUrls: ['./drlist.page.scss'],
})
export class DrlistPage implements OnInit {
  
  drlist:any={};

  constructor(private service: DoctorService) { }

  ngOnInit() {
    this.getDoctor();
  }

  getDoctor(){
    this.service.getDoctors().subscribe(res=>{
      this.drlist = res;
      console.log(this.drlist)
    })
  }

}
